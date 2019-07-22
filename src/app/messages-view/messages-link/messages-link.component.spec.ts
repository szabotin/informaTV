import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesLinkComponent } from './messages-link.component';

describe('MessagesLinkComponent', () => {
  let component: MessagesLinkComponent;
  let fixture: ComponentFixture<MessagesLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
