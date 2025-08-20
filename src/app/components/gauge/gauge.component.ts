import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent {
  @Input() value: number = 0;
  @Input() min: number = 0;
  @Input() max: number = 100;
}
