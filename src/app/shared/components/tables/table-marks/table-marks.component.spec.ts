import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMarksComponent } from './table-marks.component';

describe('TableMarksComponent', () => {
  let component: TableMarksComponent;
  let fixture: ComponentFixture<TableMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
