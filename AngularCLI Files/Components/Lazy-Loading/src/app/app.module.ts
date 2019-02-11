import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LazyLoadImagesComponent } from './lazy-load-images/lazy-load-images.component';

@NgModule({
  declarations: [
    AppComponent,
    LazyLoadImagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
