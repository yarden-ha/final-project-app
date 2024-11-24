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



}
