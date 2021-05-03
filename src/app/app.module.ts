import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './components/nav/nav.component';
<<<<<<< HEAD
import { PlanetComponent } from './components/planet/planet.component';
=======
>>>>>>> efc9f7752ee448d35f8d363df7116449d918d75e

import { PlanetComponent } from './components/planet/planet.component';
import { SpeciesListComponent } from './components/species-list/species-list.component';
<<<<<<< HEAD
import { CharacterComponent } from './components/character/character.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
=======
import { CharacterComponent } from './character/character.component';
import { CharacterListComponent } from './character-list/character-list.component';
>>>>>>> efc9f7752ee448d35f8d363df7116449d918d75e
import { SpeciesDetailsComponent } from './components/species-details/species-details.component';
import { SpeciesPageComponent } from './components/species-page/species-page.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    NavComponent,
    PlanetComponent,
    SpeciesListComponent,
    CharacterComponent,
    CharacterListComponent,
    SpeciesDetailsComponent,
    SpeciesPageComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [LandingPageComponent]
})
export class AppModule { }
