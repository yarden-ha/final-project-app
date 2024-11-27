import { Component } from '@angular/core';

@Component({
  selector: 'app-text-box-default-exercise',
  templateUrl: './text-box-default-exercise.component.html',
  styleUrl: './text-box-default-exercise.component.css'
})
export class TextBoxDefaultExerciseComponent {

  sets: number | null = null;
  reps: number | null = null;

  validateInput(event: any, field: 'sets' | 'reps', min: number, max: number): void {
    let value = parseFloat(event.target.value);

    
    if (isNaN(value)) {
      value = min;  
    } else {
      value = Math.min(Math.max(value, min), max);  
    }

    
    this[field] = value;

    
    event.target.value = value;  
  }

}
