import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './components/character/character.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { PlanetComponent } from './components/planet/planet.component';
import { SpeciesDetailsComponent } from './components/species-details/species-details.component';
import { SpeciesListComponent } from './components/species-list/species-list.component';
import { SpeciesPageComponent } from './components/species-page/species-page.component';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';

const routes: Routes = [
  {
    path: 'character',
    component: CharacterComponent
  },
  {
    path: 'characterList',
    component: CharacterListComponent
  },
  {
    path: 'planet',
    component: PlanetComponent
  },
  {
    path: 'planetsList',
    component: PlanetsListComponent
  },
  {
    path: 'speciesDetails',
    component: SpeciesDetailsComponent
  },
  {
    path: 'species',
    component: SpeciesListComponent
  },
  {
    path: 'speciesPage',
    component: SpeciesPageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
