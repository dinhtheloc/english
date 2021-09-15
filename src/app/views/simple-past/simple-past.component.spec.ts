import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePastComponent } from './simple-past.component';

describe('SimplePastComponent', () => {
  let component: SimplePastComponent;
  let fixture: ComponentFixture<SimplePastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplePastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
