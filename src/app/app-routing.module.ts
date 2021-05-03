import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SpeciesListComponent } from './components/species-list/species-list.component';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';

export const routes: Routes = [
  {
    path: 'species',
    component: SpeciesListComponent,
  },
  {
    path: 'planets',
    component: PlanetsListComponent,
  },
  {
    path:'Character/:id',
    component: CharacterDetailsComponent
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
