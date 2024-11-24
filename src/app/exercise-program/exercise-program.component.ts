import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercise-program',
  templateUrl: './exercise-program.component.html',
  styleUrl: './exercise-program.component.css'
})
export class ExerciseProgramComponent {
  title= "Exercise Mode Selection";
  
  @Output() standard = new EventEmitter<void>();
  @Output() customize = new EventEmitter<void>();
  

  onStandardClick() {
    this.standard.emit();
  }

  onCustomizeClick() {
    this.customize.emit(); 
}

}
