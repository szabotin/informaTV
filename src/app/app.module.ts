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
import { NewsComponent } from './main/news/news.component';
import { RemindersComponent } from './main/reminders/reminders.component';
import { WeatherComponent } from './main/weather/weather.component';

// services

import { SectionsNavService } from './services/sectionsNavService';
import { MessagesService } from './services/messages.service';
import { MessagesNavService } from './services/messagesNav.service';
import { EventsService } from './services/events.service';

@NgModule({
  declarations: [
    AppComponent,

    MainComponent,
    
    HeaderComponent,
    FooterComponent,

    StartPageComponent,

    EventsComponent,
    MessagesComponent,
    MessagesNavComponent,
    MessagesLinkComponent,
    MessageTextComponent,
    MessageBoxComponent,
    NewsComponent,
    RemindersComponent,
    WeatherComponent,
    MessagesBlankComponent,
    NextEventsComponent,
    NextWeekEventsComponent,
    AfterEventsComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  
  providers: [SectionsNavService, MessagesService, MessagesNavService, EventsService],
  
  bootstrap: [AppComponent]
})

export class AppModule {}
