import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { StarshipService } from "../app/services/starship.service";
import starships from "../app/tests/data/Starship.json";
import { convertStarship } from "../app/shared/utilities";
import Starship from "../app/models/Starship";

describe('StarshipService', () => {
  let service: StarshipService;
  let httpClientSpy: {get: jasmine.Spy};
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    service = TestBed.inject(StarshipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('testing the getStarship functionality',()=>{
    const ship : Starship = convertStarship(starships[0]);
    
    httpClientSpy.get.and.returnValue(of(ship))
    service.getStarship(1).subscribe((data)=>{
      expect(data).toEqual(ship);
    });
  })

  it('get all starships', () => {
    const ships : Starship[] = starships.map(ship => convertStarship(ship));

    httpClientSpy.get.and.returnValue(of(ships))

    service.getStarships().subscribe(data => {
      expect(data).toEqual(ships);
    });

    
  })
});
