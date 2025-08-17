import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { WebSocketClient } from '../services/websocket.service';

@Component({
  selector: 'app-calibiration-methods',
  templateUrl: './calibiration-methods.component.html',
  styleUrl: './calibiration-methods.component.css'
})
export class CalibirationMethodsComponent {
  title= "Sensor's Data";
  
  showInput = false;

  constructor(private httpService: HttpService, public websocketClient: WebSocketClient) {
    this.websocketClient.initConnection();
  }

  // Getter to access connection status reactively
  get connectionEstablished() {
    return this.websocketClient.connected();
  }

  Start(){
    this.showInput = !this.showInput;
    
    this.httpService.testGet().subscribe(val => {
      console.log("it works!")
      console.log(val)
    });
  }

  Stop(){ 
    this.showInput = !this.showInput;

    this.httpService.testGet().subscribe(val => {
      console.log("works")
      console.log(val)
    });
  }
  ChangeDirection(){
    this.showInput = !this.showInput;

    this.httpService.testGet().subscribe(val => {
      console.log("works")
      console.log(val)
    });
  }
}
