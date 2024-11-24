import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultExerciseComponent } from './default-exercise.component';

describe('DefaultExerciseComponent', () => {
  let component: DefaultExerciseComponent;
  let fixture: ComponentFixture<DefaultExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefaultExerciseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
