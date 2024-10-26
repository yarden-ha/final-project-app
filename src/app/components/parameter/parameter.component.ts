import { Component } from '@angular/core';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrl: './parameter.component.css'
})
export class ParameterComponent {
  title='Parameters Aquisition';

  showInput = false;

  // User input values
  age: number | null = null;
  height: number | null = null;
  weight: number | null = null;

  // Function to toggle visibility of input fields
  toggleInputFields() {
      this.showInput = !this.showInput; // Toggle the visibility of input fields
  }

}
