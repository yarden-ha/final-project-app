import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncoderGraphComponent } from './encoder-graph.component';

describe('EncoderGraphComponent', () => {
  let component: EncoderGraphComponent;
  let fixture: ComponentFixture<EncoderGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EncoderGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncoderGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
