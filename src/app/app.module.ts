import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' ; // to use the 2 way binding (don't used it in this code yet)

import { AppRoutingModule } from './app-routing.module';

// Components

import { AppComponent } from './app.component';

import { MainComponent } from './main/main.component';

import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';

import { StartPageComponent } from './main/start-page/start-page.component';

import { EventsComponent } from './events/events.component';
import { NextEventsComponent } from './events/next-events/next-events.component';
import { NextWeekEventsComponent } from './events/next-week-events/next-week-events.component';
import { AfterEventsComponent } from './events/after-events/after-events.component';

import { MessagesComponent } from './messages/messages.component';
import { MessagesNavComponent } from './messages/messages-nav/messages-nav.component';
import { MessagesLinkComponent } from './messages/messages-nav/messages-link/messages-link.component';
import { MessageTextComponent } from './messages/message-text/message-text.component';
import { MessageBoxComponent } from './messages/message-text/message-box/message-box.component';
import { MessagesBlankComponent } from './messages/messages-blank/messages-blank.component';

import { NewsComponent } from './news/news.component';
import { NewsContentComponent } from './news/news-content/news-content.component';

import { WeatherComponent } from './weather/weather.component';

// services

import { SectionsNavService } from './services/sectionsNavService';
import { EventsService } from './services/events.service';
import { MessagesService } from './services/messages.service';
import { MessagesNavService } from './services/messagesNav.service';
import { NewsService } from './services/news.service';
import { WeatherService } from './services/weather.service';
import { OneComponent } from './weather/one/one.component';
import { ThreeComponent } from './weather/three/three.component';
import { WeekComponent } from './weather/week/week.component';

@NgModule({
	declarations: [
		AppComponent,

		MainComponent,
		
		HeaderComponent,
		FooterComponent,

		StartPageComponent,

		EventsComponent,
		NextEventsComponent,
		NextWeekEventsComponent,
		AfterEventsComponent,
		
		MessagesComponent,
		MessagesNavComponent,
		MessagesLinkComponent,
		MessageTextComponent,
		MessageBoxComponent,
		MessagesBlankComponent,

		NewsComponent,
		NewsContentComponent,
		
		WeatherComponent,
		OneComponent,
		ThreeComponent,
		WeekComponent,
	],

	imports: [
		BrowserModule,
		AppRoutingModule, 
		FormsModule
	],
	
	providers: [SectionsNavService, MessagesService, MessagesNavService, EventsService, NewsService, WeatherService],
	
	bootstrap: [AppComponent]
})

export class AppModule {}
