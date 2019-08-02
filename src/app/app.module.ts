import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' ; // to use the 2 way binding (don't used it in this code yet)

import { AppRoutingModule } from './app-routing.module';

// Components

import { AppComponent } from './app.component';

import { MainComponent } from './main/main.component';
import { SectionsNavComponent } from './sections-nav/sections-nav.component';
import { SectionLinkComponent } from './sections-nav/section-link/section-link.component';

import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';

import { StartPageComponent } from './main/start-page/start-page.component';

import { EventsComponent } from './main/events/events.component';
import { MessagesComponent } from './main/messages/messages.component';
import { MessagesNavComponent } from './main/messages/messages-nav/messages-nav.component';
import { MessagesLinkComponent } from './main/messages/messages-nav/messages-link/messages-link.component';
import { MessagesPageComponent } from './main/messages/messages-page/messages-page.component';
import { NewsComponent } from './main/news/news.component';
import { RemindersComponent } from './main/reminders/reminders.component';
import { WeatherComponent } from './main/weather/weather.component';

// services

import { SectionsNavService } from './services/sectionsNavService';
import { MessageVideoComponent } from './main/messages/messages-page/message-video/message-video.component';
import { MessageAudioComponent } from './main/messages/messages-page/message-audio/message-audio.component';
import { MessageTextComponent } from './main/messages/messages-page/message-text/message-text.component';
import { MessageBoxComponent } from './main/messages/messages-page/message-text/message-box/message-box.component';

@NgModule({
  declarations: [
    AppComponent,

    MainComponent,
    SectionsNavComponent,
    SectionLinkComponent,
    
    HeaderComponent,
    FooterComponent,

    StartPageComponent,

    EventsComponent,
    MessagesComponent,
    MessagesNavComponent,
    MessagesLinkComponent,
    MessagesPageComponent,
    MessageTextComponent,
    MessageAudioComponent,
    MessageVideoComponent,
    NewsComponent,
    RemindersComponent,
    WeatherComponent,
    MessageBoxComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  
  providers: [SectionsNavService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
