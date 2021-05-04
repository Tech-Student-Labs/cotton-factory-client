import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsDetailComponent } from './films-detail/films-detail.component';
import { FilmsListComponent } from './films-list/films-list.component';



@NgModule({
  declarations: [
    FilmsDetailComponent,
    FilmsListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FilmsModule { }
