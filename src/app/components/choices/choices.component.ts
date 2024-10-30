import { Component } from '@angular/core';

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrl: './choices.component.css'
})
export class ChoicesComponent {
  title = "Machine or Exercise Setup";

  showInput = false;

  Calibiration() {
    this.showInput = !this.showInput; 
}
  Exercises() {
    this.showInput = !this.showInput; 
}
}
