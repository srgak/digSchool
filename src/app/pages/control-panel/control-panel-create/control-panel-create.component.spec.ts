import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelCreateComponent } from './control-panel-create.component';

describe('ControlPanelCreateComponent', () => {
  let component: ControlPanelCreateComponent;
  let fixture: ComponentFixture<ControlPanelCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlPanelCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlPanelCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
