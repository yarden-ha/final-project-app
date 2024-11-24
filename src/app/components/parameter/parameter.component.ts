import { Component } from '@angular/core';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.css']
})
export class ParameterComponent {
  title = "Parameters Acquisition";

  showInput = false;

  age: number = 0;
  height: number = 0;
  weight: number = 0;

  
  validateInput(event: any, field: 'age' | 'height' | 'weight', min: number, max: number): void {
    let value = parseFloat(event.target.value);

    
    if (isNaN(value)) {
      value = min;  
    } else {
      value = Math.min(Math.max(value, min), max);  
    }

    
    this[field] = value;

    
    event.target.value = value;  
  }

  toggleInputFields() {
    this.showInput = !this.showInput;
  }
}
