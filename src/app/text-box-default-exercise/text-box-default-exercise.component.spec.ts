import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBoxDefaultExerciseComponent } from './text-box-default-exercise.component';

describe('TextBoxDefaultExerciseComponent', () => {
  let component: TextBoxDefaultExerciseComponent;
  let fixture: ComponentFixture<TextBoxDefaultExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextBoxDefaultExerciseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextBoxDefaultExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
