import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './components/Character/Character.component';
import { CharacterListComponent } from './components/CharacterList/CharacterList.component';

const routes: Routes = [
  {
    path: 'character',
    component: CharacterComponent
  },
  {
    path: 'characterList',
    component: CharacterListComponent
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
