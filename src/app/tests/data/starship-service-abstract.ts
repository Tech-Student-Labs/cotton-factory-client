import { Observable, of } from "rxjs";
import Starship from "src/app/models/Starship";
import ApiResponse from "src/app/shared/ApiResponse";
import { convertStarship } from "src/app/shared/utilities";

import starships from "./Starship.json";



export abstract class StarshipServiceAbstract {
    public abstract getStarships() : Observable<ApiResponse>;
    public abstract getStarship() : Observable<Starship>;
}

export class MockStarshipService implements StarshipServiceAbstract {
    public getStarships() : Observable<ApiResponse> {
        return of({count: 32, next: "", previous: "", results: [...starships]})
    }

    public getStarship() : Observable<Starship> {
        return of(convertStarship(starships[0]));
    }
}