import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-guage',
  templateUrl: './guage.component.html',
  styleUrl: './guage.component.css'
})
export class GuageComponent {
  @Input() set value(val: string) {
    this._value = val;
    this.arcPath = this.getArcPath();
  }    // e.g. weight in kg
  _value='0'
  @Input() max: number = 10000;      // max weight (e.g. 200kg)
  @Input() label: string = 'g';   // label to show (e.g. "Force")
  arcPath=''
  // Arc calculation
  getArcPath(): string {
    const radius = 40;
    const centerX = 50;
    const centerY = 50;
    const startAngle = Math.PI;
    const angle = Math.min(Number(this._value) / this.max, 1) * Math.PI; // cap at max
    const endX = centerX + radius * Math.cos(startAngle + angle);
    const endY = centerY + radius * Math.sin(startAngle + angle);
    const largeArcFlag = angle > Math.PI / 2 ? 1 : 0;

    return `M ${centerX - radius} ${centerY}
            A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`;
  }
}
