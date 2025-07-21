import { Component, Input, ElementRef, ViewChild, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import * as d3 from 'd3';
import { GraphData } from '../../app.component';

@Component({
  selector: 'app-encoder-graph',
  templateUrl: './encoder-graph.component.html',
  styleUrl: './encoder-graph.component.css'
})
export class EncoderGraphComponent implements AfterViewInit, OnChanges {
  @Input() data: GraphData= [];
  @ViewChild('graphContainer', { static: true }) graphContainer!: ElementRef;

  private svg: any;
  private width = 600;
  private height = 300;
  private margin = { top: 20, right: 30, bottom: 30, left: 40 };

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
    // Clear previous content
    this.svg.selectAll('*').remove();
    if (!this.data || this.data.length === 0) return;

    // Find the last (latest) timestamp
    const lastTimestamp = Math.max(...this.data.map(d => typeof d.time === 'number' ? d.time : new Date(d.time).getTime()));

    // Compute relative time in seconds from the end
    const dataWithRelativeTime = this.data.map(d => {
      const t = typeof d.time === 'number' ? d.time : new Date(d.time).getTime();
      return {
        ...d,
        relativeTime: (lastTimestamp - t) / 1000 // seconds from end
      };
    });

    const dataForPlot = [...dataWithRelativeTime].reverse();

    // X scale: relative time (0 at end, increasing to the left)
    const x = d3.scaleLinear()
      .domain(d3.extent(dataWithRelativeTime, d => d.relativeTime) as [number, number])
      .range([0, this.width - this.margin.left - this.margin.right]);

    // Y scale: pin value (0 or 1)
    const y = d3.scaleLinear()
      .domain([0, 1])
      .range([this.height - this.margin.top - this.margin.bottom, 0]);

    // X Axis (Seconds from End)
    this.svg.append('g')
      .attr('transform', `translate(0,${this.height - this.margin.top - this.margin.bottom})`)
      .call(d3.axisBottom(x).ticks(6));
    this.svg.append('text')
      .attr('x', (this.width - this.margin.left - this.margin.right) / 2)
      .attr('y', this.height - this.margin.top - this.margin.bottom + 30)
      .attr('text-anchor', 'middle')
      .text('Seconds from End');

    // Y Axis (Pin Value)
    this.svg.append('g')
      .call(d3.axisLeft(y).ticks(2));
    this.svg.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('x', -(this.height - this.margin.top - this.margin.bottom) / 2)
      .attr('y', -35)
      .attr('text-anchor', 'middle')
      .text('Pin Value');

    // Line generator for Pin A
    const lineA = d3.line<{ relativeTime: number, pinA: number }>()
      .x(d => x(d.relativeTime))
      .y(d => y(d.pinA));

    // Line generator for Pin B
    const lineB = d3.line<{ relativeTime: number, pinB: number }>()
      .x(d => x(d.relativeTime))
      .y(d => y(d.pinB));

    // Draw Pin A line (thicker, more saturated blue)
    this.svg.append('path')
      .datum(dataForPlot)
      .attr('fill', 'none')
      .attr('stroke', '#0033ff')
      .attr('stroke-width', 4)
      .attr('d', lineA as any);

    // Draw Pin B line (unchanged)
    this.svg.append('path')
      .datum(dataForPlot)
      .attr('fill', 'none')
      .attr('stroke', 'orange')
      .attr('stroke-width', 2)
      .attr('d', lineB as any);

    // Pin A points: larger
    this.svg.selectAll('.dotA')
      .data(dataForPlot)
      .enter()
      .append('circle')
      .attr('class', 'dotA')
      .attr('cx', (d: { relativeTime: number, pinA: number, pinB: number }) => x(d.relativeTime))
      .attr('cy', (d: { relativeTime: number, pinA: number, pinB: number }) => y(d.pinA))
      .attr('r', 5)
      .attr('fill', '#0033ff');

    // Pin B points: unchanged
    this.svg.selectAll('.dotB')
      .data(dataForPlot)
      .enter()
      .append('circle')
      .attr('class', 'dotB')
      .attr('cx', (d: { relativeTime: number, pinA: number, pinB: number }) => x(d.relativeTime))
      .attr('cy', (d: { relativeTime: number, pinA: number, pinB: number }) => y(d.pinB))
      .attr('r', 3)
      .attr('fill', 'orange');

    // Add legend
    this.svg.append('text')
      .attr('x', 10)
      .attr('y', -5)
      .attr('class', 'legend-pina')
      .text('Pin A');
    this.svg.append('text')
      .attr('x', 70)
      .attr('y', -5)
      .attr('class', 'legend-pinb')
      .text('Pin B');
  }
}
