import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartPageComponent } from './main/start-page/start-page.component';

import { EventsComponent } from './events/events.component';
import { NextEventsComponent } from './events/next-events/next-events.component';
import { NextWeekEventsComponent } from './events/next-week-events/next-week-events.component';
import { AfterEventsComponent } from './events/after-events/after-events.component';

import { MessagesComponent } from './messages/messages.component';
import { MessagesBlankComponent } from './messages/messages-blank/messages-blank.component';

import { NewsComponent } from './news/news.component';
import { NewsPageComponent } from './news/news-page/news-page.component';

import { RemindersComponent } from './main/reminders/reminders.component';
import { WeatherComponent } from './main/weather/weather.component';

const routes: Routes = [
	{ path: 'start', component: StartPageComponent },
	
	{ path: 'events', component: EventsComponent, children: [
		{ path: 'next', component: NextEventsComponent },
		{ path: 'next-week', component: NextWeekEventsComponent },
		{ path: 'after', component: AfterEventsComponent }
	]},
	
	{ path: 'messages', component: MessagesComponent },
	{ path: 'messages-blank', component: MessagesBlankComponent },
	
	{ path: 'news', component: NewsComponent, children: [
		{ path: 'news-page', component: NewsPageComponent }
	]},
	
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
