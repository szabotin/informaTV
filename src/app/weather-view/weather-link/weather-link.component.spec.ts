import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherLinkComponent } from './weather-link.component';

describe('WeatherLinkComponent', () => {
  let component: WeatherLinkComponent;
  let fixture: ComponentFixture<WeatherLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
