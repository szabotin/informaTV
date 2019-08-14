import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageAudioComponent } from './message-audio.component';

describe('MessageAudioComponent', () => {
  let component: MessageAudioComponent;
  let fixture: ComponentFixture<MessageAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageAudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
