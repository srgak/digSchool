import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUserLessonComponent } from './form-user-lesson.component';

describe('FormUserLessonComponent', () => {
  let component: FormUserLessonComponent;
  let fixture: ComponentFixture<FormUserLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUserLessonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormUserLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
