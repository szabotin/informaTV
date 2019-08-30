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
import { NewsContentComponent } from './news/news-content/news-content.component';

import { WeatherComponent } from './weather/weather.component';
import { OneComponent } from './weather/one/one.component';
import { ThreeComponent } from './weather/three/three.component';
import { WeekComponent } from './weather/week/week.component';

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
		{ path: 'world', component: NewsContentComponent }, // put the same number of children as numbers of categories
		{ path: 'ireland', component: NewsContentComponent },
		{ path: 'sports', component: NewsContentComponent },
		{ path: 'music', component: NewsContentComponent }
	]},

	{ path: 'weather', component: WeatherComponent, children: [
		{ path: 'one-box', component: OneComponent },
		{ path: 'three-boxes', component: ThreeComponent },
		{ path: 'week', component: WeekComponent },
	]},

	{ path: '**', component: StartPageComponent },
	{ path: '', component: StartPageComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
