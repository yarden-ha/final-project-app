import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-calibiration-methods',
  templateUrl: './calibiration-methods.component.html',
  styleUrl: './calibiration-methods.component.css'
})
export class CalibirationMethodsComponent {
  title= "Calibiration Mode Selection";
  
  showInput = false;

  constructor(private httpService: HttpService) {}

  Rehabilitation(){
    this.showInput = !this.showInput;
    
    this.httpService.testGet().subscribe(val => {
      console.log("it works!")
      console.log(val)
    });
  }

  Intense(){
    this.showInput = !this.showInput;

    this.httpService.testGet().subscribe(val => {
      console.log("sexy mustache")
      console.log(val)
    });
  }
}
