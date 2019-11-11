import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EuPopupModule } from 'eu-popup';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EuPopupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
