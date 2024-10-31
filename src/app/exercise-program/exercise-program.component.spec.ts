import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseProgramComponent } from './exercise-program.component';

describe('ExerciseProgramComponent', () => {
  let component: ExerciseProgramComponent;
  let fixture: ComponentFixture<ExerciseProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExerciseProgramComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
