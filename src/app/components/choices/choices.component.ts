import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrl: './choices.component.css'
})
export class ChoicesComponent {
  title = "Machine or Exercise Setup";

  @Output() calibration = new EventEmitter<void>();
  @Output() exercises = new EventEmitter<void>();


  onCalibrationClick() {
    this.calibration.emit();
  }

  
  onExercisesClick() {
    this.exercises.emit(); 
}

}
