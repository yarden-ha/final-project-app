import { Component, Input, ElementRef, ViewChild, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import * as d3 from 'd3';

export interface EngineDataPoint {
  rpm: number;
  delay: number;
  weight: number;
}

@Component({
  selector: 'app-engine-graph',
  templateUrl: './engine-graph.component.html',
  styleUrl: './engine-graph.component.css'
})
export class EngineGraphComponent implements AfterViewInit, OnChanges {
  @Input() data: EngineDataPoint[] = [];
  @ViewChild('graphContainer', { static: true }) graphContainer!: ElementRef;

  private svg: any;
  private width = 750;
  private height = 300;
  private margin = { top: 30, right: 60, bottom: 40, left: 50 };

  ngAfterViewInit() {
    this.createSvg();
    this.drawChart();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && this.svg) {
      this.drawChart();
    }
  }

  private createSvg(): void {
    this.svg = d3.select(this.graphContainer.nativeElement)
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .append('g')
      .attr('transform', `translate(${this.margin.left},${this.margin.top})`);
  }

  private drawChart(): void {
    this.svg.selectAll('*').remove();
    if (!this.data || this.data.length === 0) return;

    const x = d3.scaleLinear()
      .domain([0, this.data.length - 1])
      .range([0, this.width - this.margin.left - this.margin.right]);

    // Left y-axis for delay and weight
    const yMinLeft = Math.min(
      d3.min(this.data, d => d.delay)!,
      d3.min(this.data, d => d.weight)!
    );
    const yMaxLeft = Math.max(
      d3.max(this.data, d => d.delay)!,
      d3.max(this.data, d => d.weight)!
    );
    const yLeft = d3.scaleLinear()
      .domain([yMinLeft, yMaxLeft])
      .range([this.height - this.margin.top - this.margin.bottom, 0]);

    // Right y-axis for rpm
    const yMinRight = d3.min(this.data, d => d.rpm)!;
    const yMaxRight = d3.max(this.data, d => d.rpm)!;
    const yRight = d3.scaleLinear()
      .domain([yMinRight, yMaxRight])
      .range([this.height - this.margin.top - this.margin.bottom, 0]);

    // X Axis
    this.svg.append('g')
      .attr('transform', `translate(0,${this.height - this.margin.top - this.margin.bottom})`)
      .call(d3.axisBottom(x));
    this.svg.append('text')
      .attr('x', (this.width - this.margin.left - this.margin.right) / 2)
      .attr('y', this.height - this.margin.top - this.margin.bottom + 35)
      .attr('text-anchor', 'middle')
      .style('fill', '#fff')
      .text('Index');

    // Left Y Axis (delay/weight)
    this.svg.append('g')
      .call(d3.axisLeft(yLeft));
    this.svg.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('x', -(this.height - this.margin.top - this.margin.bottom) / 2)
      .attr('y', -40)
      .attr('text-anchor', 'middle')
      .style('fill', '#fff')
      .text('Delay / Weight');

    // Right Y Axis (rpm)
    this.svg.append('g')
      .attr('transform', `translate(${this.width - this.margin.left - this.margin.right},0)`)
      .call(d3.axisRight(yRight));
    this.svg.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('x', -(this.height - this.margin.top - this.margin.bottom) / 2)
      .attr('y', this.width - this.margin.left - this.margin.right + 40)
      .attr('text-anchor', 'middle')
      .style('fill', '#fff')
      .text('RPM');

    // Line generators
    const lineRpm = d3.line<EngineDataPoint>()
      .x((d, i) => x(i))
      .y(d => yRight(d.rpm));
    const lineDelay = d3.line<EngineDataPoint>()
      .x((d, i) => x(i))
      .y(d => yLeft(d.delay));
    const lineWeight = d3.line<EngineDataPoint>()
      .x((d, i) => x(i))
      .y(d => yLeft(d.weight));

    // Draw lines
    this.svg.append('path')
      .datum(this.data)
      .attr('fill', 'none')
      .attr('stroke', '#0033ff')
      .attr('stroke-width', 2)
      .attr('d', lineRpm as any);
    this.svg.append('path')
      .datum(this.data)
      .attr('fill', 'none')
      .attr('stroke', 'orange')
      .attr('stroke-width', 2)
      .attr('d', lineDelay as any);
    this.svg.append('path')
      .datum(this.data)
      .attr('fill', 'none')
      .attr('stroke', 'green')
      .attr('stroke-width', 2)
      .attr('d', lineWeight as any);

    // Add legend
    this.svg.append('text')
      .attr('x', 10)
      .attr('y', -10)
      .attr('fill', '#0033ff')
      .text('RPM (right axis)');
    this.svg.append('text')
      .attr('x', 138)
      .attr('y', -10)
      .attr('fill', 'orange')
      .text('Delay (left axis)');
    this.svg.append('text')
      .attr('x', 260)
      .attr('y', -10)
      .attr('fill', 'green')
      .text('Weight (left axis)');
  }
}
