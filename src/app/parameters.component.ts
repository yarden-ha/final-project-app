import { Component } from '@angular/core';

@Component({
    selector: 'parameters',
    template: `

    <div style="text-align: center;">
    <h1> {{ title }} </h1>
    </div>

    <div style="margin-bottom: 10px;">
            <button (click)="toggleInputFields()">input your parameters please</button>
        </div>

        
        <div *ngIf="showInput">
            <div style="margin-bottom: 10px;">
                <input
                    type="number"
                    [(ngModel)]="age"
                    placeholder="Enter your age"
                />
                <p *ngIf="age">You entered: {{ age }} years</p>
            </div>

            <div style="margin-bottom: 10px;">
                <input
                    type="number"
                    [(ngModel)]="height"
                    placeholder="Enter your height"
                />
                <p *ngIf="height">You entered: {{ height }} cm</p>
            </div>

            <div style="margin-bottom: 10px;">
                <input
                    type="number"
                    [(ngModel)]="weight"
                    placeholder="Enter your weight"
                />
                <p *ngIf="weight">You entered: {{ weight }} kg</p>
            </div>
        </div>
    `
})
export class Parameters{
    title='Parameters Aquisition';

    showInput = false;

    // User input values
    age: number | null = null;
    height: number | null = null;
    weight: number | null = null;

    // Function to toggle visibility of input fields
    toggleInputFields() {
        this.showInput = !this.showInput; // Toggle the visibility of input fields
    }
}