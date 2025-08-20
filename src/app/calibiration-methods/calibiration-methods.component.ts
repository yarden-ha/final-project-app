import { Component, signal } from '@angular/core';
import { HttpService } from '../services/http.service';
import { WebSocketClient } from '../services/websocket.service';

@Component({
  selector: 'app-calibiration-methods',
  templateUrl: './calibiration-methods.component.html',
  styleUrl: './calibiration-methods.component.css'
})
export class CalibirationMethodsComponent {
  title = "Sensor's Data";

  showInput = false;
  gaugeVal = signal('0')
  constructor(private httpService: HttpService, public websocketClient: WebSocketClient) {
    this.websocketClient.initConnection();
  }

  // Getter to access connection status reactively
  get connectionEstablished() {
    return this.websocketClient.connected();
  }

  Start() {
    this.showInput = !this.showInput;
    console.log('start');
    this.httpService.initGetSensor().subscribe(async val => {
      console.log(val)
      await this.websocketClient.addSignal('force')
      this.gaugeVal = this.websocketClient.getSignals().get('force')!
    })
  }

  Stop() {
    this.showInput = !this.showInput;

    this.httpService.stopMotor().subscribe(val => {
      console.log("works")
      console.log(val)
    });
  }
  ChangeDirection() {
    this.showInput = !this.showInput;

    // this.httpService.c().subscribe(val => {
    //   console.log("works")
    //   console.log(val)
    // });
  }
}
