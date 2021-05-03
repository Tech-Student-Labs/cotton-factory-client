import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { SpeciesListComponent } from './components/species-list/species-list.component';

export const routes: Routes = [
  {
    path: 'species',
    component: SpeciesListComponent,
  },
  { path: 'character/:id', component : CharacterDetailsComponent},
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
