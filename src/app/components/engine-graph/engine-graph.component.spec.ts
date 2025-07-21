import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineGraphComponent } from './engine-graph.component';

describe('EngineGraphComponent', () => {
  let component: EngineGraphComponent;
  let fixture: ComponentFixture<EngineGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
