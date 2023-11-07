import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalMarksComponent } from './journal-marks.component';

describe('JournalMarksComponent', () => {
  let component: JournalMarksComponent;
  let fixture: ComponentFixture<JournalMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalMarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JournalMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
