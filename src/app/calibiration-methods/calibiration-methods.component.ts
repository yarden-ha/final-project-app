import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-calibiration-methods',
  templateUrl: './calibiration-methods.component.html',
  styleUrl: './calibiration-methods.component.css'
})
export class CalibirationMethodsComponent {
  title= "Sensor's Data";
  
  showInput = false;

  constructor(private httpService: HttpService) {}

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
