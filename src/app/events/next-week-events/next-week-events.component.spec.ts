import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextWeekEventsComponent } from './next-week-events.component';

describe('NextWeekEventsComponent', () => {
  let component: NextWeekEventsComponent;
  let fixture: ComponentFixture<NextWeekEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextWeekEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextWeekEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
