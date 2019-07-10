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
import { MessagesViewComponent } from './messages-view/messages-view.component';
import { MessagePageComponent } from './messages-view/message-page/message-page.component';
import { MessageBoxComponent } from './messages-view/message-page/message-box/message-box.component';
import { WeatherPageComponent } from './weather-page/weather-page.component';
import { WeatherBoxComponent } from './weather-page/weather-box/weather-box.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { EventBoxComponent } from './events-page/event-box/event-box.component';
import { RemindersPageComponent } from './reminders-page/reminders-page.component';
import { RemindersBoxComponent } from './reminders-page/reminders-box/reminders-box.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { NewsBoxComponent } from './news-page/news-box/news-box.component';

// services

import { EventsService } from './services/events.service';
import { HomeService } from './services/home.service';
import { MessagesService } from './services/messages.service';
// import { NewsService } from './services/news.service';
import { PagesService } from './services/pages.service';
// import { RemindersService } from './services/reminders.service';
import { WeatherService } from './services/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    FooterComponent,
    MessagesViewComponent,
    MessagePageComponent,
    MessageBoxComponent,
    WeatherPageComponent,
    WeatherBoxComponent,
    EventsPageComponent,
    EventBoxComponent,
    RemindersPageComponent,
    RemindersBoxComponent,
    NewsPageComponent,
    NewsBoxComponent,
    HomeLinkComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  
  providers: [EventsService, HomeService, MessagesService, /*NewsService*/, PagesService, /*RemindersService*/, WeatherService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }