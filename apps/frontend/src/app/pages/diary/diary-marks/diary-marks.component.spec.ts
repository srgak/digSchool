import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryMarksComponent } from './diary-marks.component';

describe('DiaryMarksComponent', () => {
  let component: DiaryMarksComponent;
  let fixture: ComponentFixture<DiaryMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaryMarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiaryMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
