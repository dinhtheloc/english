import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastContinuousComponent } from './past-continuous.component';

describe('PastContinuousComponent', () => {
  let component: PastContinuousComponent;
  let fixture: ComponentFixture<PastContinuousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastContinuousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastContinuousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
