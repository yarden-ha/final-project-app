import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibirationMethodsComponent } from './calibiration-methods.component';

describe('CalibirationMethodsComponent', () => {
  let component: CalibirationMethodsComponent;
  let fixture: ComponentFixture<CalibirationMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalibirationMethodsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalibirationMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
