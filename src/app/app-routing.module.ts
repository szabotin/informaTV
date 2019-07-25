import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { EventsViewComponent } from './events-view/events-view.component';
import { EventsPageComponent } from './events-view/events-page/events-page.component';
import { MessagesViewComponent } from './messages-view/messages-view.component';
import { MessagesPageComponent } from './messages-view/messages-page/messages-page.component';
import { NewsViewComponent } from './news-view/news-view.component';
import { NewsPageComponent } from './news-view/news-page/news-page.component';
import { WeatherViewComponent } from './weather-view/weather-view.component';
import { WeatherPageComponent } from './weather-view/weather-page/weather-page.component';

import { BlankPageComponent } from './blank-page/blank-page.component'; // Very bad code. Delete this component if we delete the bad code in app-component for autoRouting
import { RemindersPageComponent } from './reminders-page/reminders-page.component';


const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'events-view', component: EventsViewComponent },
  { path: 'events-page', component: EventsPageComponent },
  { path: 'messages-view', component: MessagesViewComponent },
  { path: 'messages-page', component: MessagesPageComponent },
  { path: 'news-view', component: NewsViewComponent },
  { path: 'news-page', component: NewsPageComponent },
  { path: 'reminders-page', component: RemindersPageComponent },
  { path: 'weather-view', component: WeatherViewComponent },
  { path: 'weather-page', component: WeatherPageComponent },
  { path: '', component: HomePageComponent },
  { path: 'blank-page', component: BlankPageComponent }, // Very bad code. Delete this component if we delete the bad code in app-component for autoRouting
  { path: '**', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
