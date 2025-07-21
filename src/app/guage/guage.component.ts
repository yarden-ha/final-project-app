import { Component, Input, ElementRef, ViewChild, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-guage',
  templateUrl: './guage.component.html',
  styleUrl: './guage.component.css'
})
export class GuageComponent implements AfterViewInit, OnChanges {
  @Input() set value(val: string) {
    this._value = val;
    this.updateGauge();
  }
  _value = '0';
  @Input() max: number = 50000;
  @Input() min: number = 0;
  @Input() label: string = 'g';
  @ViewChild('gaugeContainer', { static: true }) gaugeContainer!: ElementRef;

  private svg: any;
  private width = 300;
  private height = 300;
  private radius = 100;
  private previousAngle: number = 0;

  ngAfterViewInit() {
    this.createGauge();
    this.updateGauge();
  }

  ngOnChanges(changes: SimpleChanges) {
    if ((changes['value'] || changes['max']) && this.svg) {
      this.updateGauge();
    }
  }

  private createGauge() {
    this.svg = d3.select(this.gaugeContainer.nativeElement)
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height);

    // Background arc (full circle)
    const arcBg = d3.arc()
      .innerRadius(this.radius - 10)
      .outerRadius(this.radius)
      .startAngle(0)
      .endAngle(2 * Math.PI);

    this.svg.append('g')
      .attr('transform', `translate(${this.width / 2},${this.height / 2})`)
      .append('path')
      .attr('d', arcBg as any)
      .attr('fill', '#e0e0e0');

    // Value arc (foreground)
    this.svg.append('g')
      .attr('class', 'value-arc')
      .attr('transform', `translate(${this.width / 2},${this.height / 2})`)
      .append('path')
      .attr('fill', '#4caf50');

    // Value text
    this.svg.append('text')
      .attr('class', 'gauge-value')
      .attr('x', this.width / 2)
      .attr('y', this.height / 2 + 5)
      .attr('text-anchor', 'middle')
      .style('fill', '#fff')
      .style('font-size', '40px');
  }

  private updateGauge() {
    if (!this.svg) return;
    const value = Math.max(this.min, Math.min(Number(this._value), this.max));
    const percent = (value - this.min) / (this.max - this.min);
    const newAngle = percent * 2 * Math.PI;

    const arcVal = d3.arc()
      .innerRadius(this.radius - 10)
      .outerRadius(this.radius)
      .startAngle(0);

    // Arc tween for smooth animation
    this.svg.select('.value-arc path')
      .transition()
      .duration(500)
      .attrTween('d', () => {
        const interpolate = d3.interpolate(this.previousAngle, newAngle);
        return (t: number) => arcVal({ endAngle: interpolate(t) } as any);
      });

    this.previousAngle = newAngle;

    // Update value text
    this.svg.select('.gauge-value')
      .text(`${this._value} ${this.label}`)
      .style('fill', '#fff')
      .style('font-size', '25px');
  }
}
