import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'

import { PegesModule } from './peges/peges.module';
import { PrimengModule } from './shared/primeng/primeng.module';
import { AppRoutingModule } from './app-routing.module';

import { Error404Component } from './shared/components/error404/error404.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    Error404Component
  ],

  imports: [
    HttpClientModule,
    BrowserModule,
    PegesModule,
    PrimengModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
