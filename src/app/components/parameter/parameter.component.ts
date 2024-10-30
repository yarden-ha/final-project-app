import { Component } from '@angular/core';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrl: './parameter.component.css'
})
export class ParameterComponent {

  title= "Parameters Aquisition";

  showInput = false;

  
  age: number | null = null;
  height: number | null = null;
  weight: number | null = null;

  
  toggleInputFields() {
      this.showInput = !this.showInput; 
  }

}
