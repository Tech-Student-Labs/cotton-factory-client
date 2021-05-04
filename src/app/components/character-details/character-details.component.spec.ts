import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockCharacterService } from '../../tests/data/character-service-abstract';
import { CharacterService } from '../../services/character.service';
import { CharacterDetailsComponent } from './character-details.component';
import { routes } from "../../app-routing.module";
import { of } from 'rxjs';

const ROUTE_ID : string = "4";

class ActivatedRouteMock {
  public paramMap = of(convertToParamMap({ 
      id: ROUTE_ID,       
  }));
}

describe('CharacterDetailsComponent', () => {
  let component: CharacterDetailsComponent;
  let fixture: ComponentFixture<CharacterDetailsComponent>;
  let router: Router;
  let route: ActivatedRoute;
  let charService: CharacterService;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [ CharacterDetailsComponent ],
      providers: [
        {
          provide: CharacterService, useClass: MockCharacterService
        },
        {
          provide: ActivatedRoute, useClass: ActivatedRouteMock
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);
    charService = TestBed.inject(CharacterService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('loads an id from the activated route', () => {
    component.ngOnInit();

    expect(component.id).toEqual(+ROUTE_ID);
  });

  it('loads data for a character based on ID', () => {
    component.ngOnInit();

    expect(component.id).toBeDefined();
    expect(component.character).toBeDefined();
    expect(component.character.created).toBeDefined();

  })

});
