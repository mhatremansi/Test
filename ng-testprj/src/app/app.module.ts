import { EventListComponent } from './EventList/event-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EventAppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    EventAppComponent,
    EventListComponent,
    ChildComponent,
    NavbarComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
