import { Injectable } from '@angular/core';
import { Planets } from '../models/Planets';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';

import ApiResponse from "../shared/ApiResponse";

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  // Endpoint for all planets
  endpoint = "https://swapi.dev/api/planets/";
  
  // Planets array to hold the list of planets
  planets: Planets[];

  constructor(private http: HttpClient) { }

  // Returns a list of all the planets in the API as an observable
  getAll(): Observable<ApiResponse>{
    return this.http.get<ApiResponse>(this.endpoint);
  }
}