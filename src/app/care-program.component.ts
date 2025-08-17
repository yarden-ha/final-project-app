import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-care-program',
  templateUrl: './care-program.component.html',
  styleUrls: ['./care-program.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CareProgramComponent {
  active: number = 0;
  constructor(private router: Router) {}
  goHome() {
    this.router.navigate(['/']);
  }
}
