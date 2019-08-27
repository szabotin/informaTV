import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterEventsComponent } from './after-events.component';

describe('AfterEventsComponent', () => {
  let component: AfterEventsComponent;
  let fixture: ComponentFixture<AfterEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
