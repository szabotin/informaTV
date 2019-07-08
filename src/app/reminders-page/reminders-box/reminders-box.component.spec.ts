import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemindersBoxComponent } from './reminders-box.component';

describe('RemindersBoxComponent', () => {
  let component: RemindersBoxComponent;
  let fixture: ComponentFixture<RemindersBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemindersBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemindersBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
