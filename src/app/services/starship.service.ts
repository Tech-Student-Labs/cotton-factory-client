import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import Starship, { StarshipJson } from '../models/Starship';

import { convertStarship } from '../shared/utilities';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  starships : Starship[];

  public apiURL = 'https://swapi.dev/api/starships';

  constructor(private httpClient: HttpClient) {}

  getStarship(id: number = 2) : Observable<Starship> {
    return this.httpClient.get<any>(`${this.apiURL}/${id}`).pipe(tap((data) => {
      return convertStarship(data);
    }));
  }

}
