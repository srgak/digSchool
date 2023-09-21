import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelEditComponent } from './control-panel-edit.component';

describe('ControlPanelEditComponent', () => {
  let component: ControlPanelEditComponent;
  let fixture: ComponentFixture<ControlPanelEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlPanelEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlPanelEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
