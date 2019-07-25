import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderBoxComponent } from './reminder-box.component';

describe('ReminderBoxComponent', () => {
  let component: ReminderBoxComponent;
  let fixture: ComponentFixture<ReminderBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
