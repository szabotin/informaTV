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
import { MessageTextComponent } from './main/messages/message-text/message-text.component';
import { MessageBoxComponent } from './main/messages/message-text/message-box/message-box.component';
import { MessageAudioComponent } from './main/messages/message-audio/message-audio.component';
import { MessageVideoComponent } from './main/messages/message-video/message-video.component';
import { NewsComponent } from './main/news/news.component';
import { RemindersComponent } from './main/reminders/reminders.component';
import { WeatherComponent } from './main/weather/weather.component';

// services

import { SectionsNavService } from './services/sectionsNavService';
import { MessagesService } from './services/messages.service';
import { MessagesNavService } from './services/messagesNav.service';
import { MessagesBlankComponent } from './main/messages/messages-blank/messages-blank.component';

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
    MessageTextComponent,
    MessageBoxComponent,
    MessageAudioComponent,
    MessageVideoComponent,
    NewsComponent,
    RemindersComponent,
    WeatherComponent,
    MessagesBlankComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  
  providers: [SectionsNavService, MessagesService, MessagesNavService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
