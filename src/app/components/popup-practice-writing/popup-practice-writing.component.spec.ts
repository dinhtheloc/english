import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupPracticeWritingComponent } from './popup-practice-writing.component';

describe('PopupPracticeWritingComponent', () => {
  let component: PopupPracticeWritingComponent;
  let fixture: ComponentFixture<PopupPracticeWritingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupPracticeWritingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupPracticeWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
