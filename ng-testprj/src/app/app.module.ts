import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EventAppComponent } from './app.component';
import { EventListComponent } from './EventList/event-list.component'

@NgModule({
  declarations: [
    EventAppComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
