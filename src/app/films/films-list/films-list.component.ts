import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../shared/films.service';
import { Film } from '../shared/film';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  public films: Film[];

  constructor(private service: FilmsService) { }

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms(): void {
    this.service.getAllFilms().subscribe(films => this.films = films.results);
  }

}
