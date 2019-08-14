import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './main/start-page/start-page.component';
import { EventsComponent } from './main/events/events.component';
import { MessagesComponent } from './main/messages/messages.component';
import { MessagesBlankComponent } from './main/messages/messages-blank/messages-blank.component';
import { NewsComponent } from './main/news/news.component';
import { RemindersComponent } from './main/reminders/reminders.component';
import { WeatherComponent } from './main/weather/weather.component';

const routes: Routes = [
  { path: 'start', component: StartPageComponent },
  { path: 'events', component: EventsComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'messages-blank', component: MessagesBlankComponent },
  { path: 'news', component: NewsComponent },
  { path: 'reminders', component: RemindersComponent },
  { path: 'weather', component: WeatherComponent },
  { path: '**', component: StartPageComponent },
  { path: '', component: StartPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
