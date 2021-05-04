import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { FilmsModule } from './films/films.module';

@NgModule({
  declarations: [
    LandingPageComponent,
    NavComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FilmsModule
  ],
  providers: [],
  bootstrap: [LandingPageComponent]
})
export class AppModule { }
