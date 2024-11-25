import { Component } from '@angular/core';

@Component({
  selector: 'app-default-exercise',
  templateUrl: './default-exercise.component.html',
  styleUrl: './default-exercise.component.css'
})
export class DefaultExerciseComponent {

  title= "Exercise Program";

  showInput = false;

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
