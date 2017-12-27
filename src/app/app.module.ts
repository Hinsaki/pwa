import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page404Component } from './page404/page404.component';
import { CustomMaterialModule } from './custom-material.module';
import { HomeModule } from './home/home.module';
import { CalendarService } from './service/calendar.service';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    HomeModule
  ],
  providers: [CalendarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
