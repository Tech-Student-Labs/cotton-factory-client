import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SpeciesListComponent } from './components/species-list/species-list.component';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { SpeciesDetailsComponent } from './components/species-details/species-details.component';


export const routes: Routes = [
  {
    path: 'people/:id',
    component: CharacterListComponent
  },
  {
    path: 'species',
    component: SpeciesListComponent
  },
  {
    path: 'species/:id',
    component: SpeciesDetailsComponent
  },
  {
    path: 'character/:id',
    component : CharacterDetailsComponent
  },
  {
    path: 'planets',
    component: PlanetsListComponent
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
