import { Component } from '@angular/core';

@Component({
  selector: 'app-calibiration-methods',
  templateUrl: './calibiration-methods.component.html',
  styleUrl: './calibiration-methods.component.css'
})
export class CalibirationMethodsComponent {
  title= "Calibiration Mode Selection";
  
  showInput = false;

  Rehabilitation(){
    this.showInput = !this.showInput;
  }

  Intense(){
    this.showInput = !this.showInput;
  }
}
