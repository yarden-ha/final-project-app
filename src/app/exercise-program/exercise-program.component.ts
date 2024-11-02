import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-exercise-program',
  templateUrl: './exercise-program.component.html',
  styleUrl: './exercise-program.component.css'
})
export class ExerciseProgramComponent {
  title= "Exercise Mode Selection";
  
  @Output() standart = new EventEmitter<void>();
  @Output() customize = new EventEmitter<void>();

  onStandartClick() {
    this.standart.emit();
  }

  onCustomizeClick() {
    this.customize.emit(); 
}

}
