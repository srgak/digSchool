import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUserClassComponent } from './form-user-class.component';

describe('FormUserClassComponent', () => {
  let component: FormUserClassComponent;
  let fixture: ComponentFixture<FormUserClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUserClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormUserClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
