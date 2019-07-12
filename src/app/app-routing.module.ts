import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagesViewComponent } from './messages-view/messages-view.component';
import { WeatherPageComponent } from './weather-page/weather-page.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { RemindersPageComponent } from './reminders-page/reminders-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MessagePageComponent } from './messages-view/message-page/message-page.component';
import { NewsPageComponent } from './news-page/news-page.component';


const routes: Routes = [
  { path: 'message-page', component: MessagePageComponent },
  { path: 'messages-view', component: MessagesViewComponent },
  { path: 'weather-page', component: WeatherPageComponent },
  { path: 'events-page', component: EventsPageComponent },
  { path: 'reminders-page', component: RemindersPageComponent },
  { path: 'news-page', component: NewsPageComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: '', component: HomePageComponent },
  { path: '**', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
