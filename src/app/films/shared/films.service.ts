import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Film } from './film';
import { tap } from 'rxjs/operators';

export interface StarWarsApiResponse {
  count: number;
  next: string;
  previous: string;
  results: [];
}

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  public apiUrl = 'https://swapi.dev/api/films';
  public films: Film[];

  constructor(private http: HttpClient) { }

  getAllFilms(): Observable<StarWarsApiResponse> {
    return this.http.get<StarWarsApiResponse>(this.apiUrl)
      .pipe(
        tap(
          response => this.films = response.results,
          err => console.error(err)
        )
      );
  }

}
