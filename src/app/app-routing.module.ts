import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { EventsViewComponent } from './events-view/events-view.component';
import { EventsPageComponent } from './events-view/events-page/events-page.component';
import { MessagesViewComponent } from './messages-view/messages-view.component';
import { MessagesPageComponent } from './messages-view/messages-page/messages-page.component';
import { NewsViewComponent } from './news-view/news-view.component';
import { NewsPageComponent } from './news-view/news-page/news-page.component';
import { RemindersComponent } from './reminders/reminders.component';
import { WeatherViewComponent } from './weather-view/weather-view.component';
import { WeatherPageComponent } from './weather-view/weather-page/weather-page.component';


const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'events-view', component: EventsViewComponent },
  { path: 'events-page', component: EventsPageComponent },
  { path: 'messages-view', component: MessagesViewComponent },
  { path: 'messages-page', component: MessagesPageComponent },
  { path: 'news-view', component: NewsViewComponent },
  { path: 'news-page', component: NewsPageComponent },
  { path: 'reminders', component: RemindersComponent },
  { path: 'weather-view', component: WeatherViewComponent },
  { path: 'weather-page', component: WeatherPageComponent },
  { path: '', component: HomePageComponent },
  { path: '**', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
