import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUserAcademicSubjectComponent } from './form-user-academic-subject.component';

describe('FormUserAcademicSubjectComponent', () => {
  let component: FormUserAcademicSubjectComponent;
  let fixture: ComponentFixture<FormUserAcademicSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUserAcademicSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormUserAcademicSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
