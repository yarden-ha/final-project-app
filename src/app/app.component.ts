import { Component, signal } from '@angular/core';
import { WebSocketClient } from './services/websocket.service';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final-project';

  active: number = 0;

  testVal = signal('0')
  constructor(private websocketClient: WebSocketClient, private httpClient: HttpService) { }
  connect() {
    console.log('connect');
    this.websocketClient.initConnection()
  }
  start() {
    console.log('start');
    this.httpClient.initGetSensor().subscribe(async val => {

      console.log(val)

      await this.websocketClient.addSignal('force')

      this.testVal = this.websocketClient.getSignals().get('force')!


    })


  }
}
