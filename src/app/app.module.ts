import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' ; // utilise le 2 way binding

import { AppRoutingModule } from './app-routing.module';

// Components

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { HomePageComponent } from './home-page/home-page.component';
import { HomeLinkComponent } from './home-page/home-link/home-link.component';

import { EventsViewComponent } from './events-view/events-view.component';
import { EventsLinkComponent } from './events-view/events-link/events-link.component';
import { EventsPageComponent } from './events-view/events-page/events-page.component';
import { MessagesViewComponent } from './messages-view/messages-view.component';
import { MessagesLinkComponent } from './messages-view/messages-link/messages-link.component';
import { MessagesPageComponent } from './messages-view/messages-page/messages-page.component';
import { MessageBoxComponent } from './messages-view/messages-page/message-box/message-box.component';
import { NewsViewComponent } from './news-view/news-view.component';
import { NewsLinkComponent } from './news-view/news-link/news-link.component';
import { NewsPageComponent } from './news-view/news-page/news-page.component';
import { RemindersComponent } from './reminders/reminders.component';
import { WeatherViewComponent } from './weather-view/weather-view.component';
import { WeatherLinkComponent } from './weather-view/weather-link/weather-link.component';
import { WeatherPageComponent } from './weather-view/weather-page/weather-page.component';
import { WeatherBoxComponent } from './weather-view/weather-page/weather-box/weather-box.component';

// services

import { HomeService } from './services/home.service';

import { EventsService } from './services/events.service';
import { MessagesService } from './services/messages.services';
import { NewsService } from './services/news.service';
import { WeatherService } from './services/weather.service';
import { BlankPageComponent } from './blank-page/blank-page.component';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,

    HomePageComponent,
    HomeLinkComponent,

    EventsViewComponent,
    EventsPageComponent,
    EventsLinkComponent,
    MessagesViewComponent,
    MessagesLinkComponent,
    MessagesPageComponent,
    MessageBoxComponent,
    NewsViewComponent,
    NewsLinkComponent,
    NewsPageComponent,
    RemindersComponent,
    WeatherViewComponent,
    WeatherLinkComponent,
    WeatherPageComponent,
    WeatherBoxComponent,
    BlankPageComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  
  providers: [HomeService, MessagesService, NewsService, WeatherService, EventsService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
