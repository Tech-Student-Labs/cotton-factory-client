import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CharacterServiceAbstract, MockCharacterService } from '../services/character-service-abstract';
import { CharacterService } from '../services/character.service';

import { CharacterDetailsComponent } from './character-details.component';

import { of } from "rxjs";

import { routes } from "../app-routing.module";

describe('CharacterDetailsComponent', () => {
  let component: CharacterDetailsComponent;
  let fixture: ComponentFixture<CharacterDetailsComponent>;
  let router: Router;
  let route: ActivatedRoute;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [ CharacterDetailsComponent ],
      providers: [
        {provide: CharacterService, useClass: MockCharacterService},
        // {provide: ActivatedRoute, useValue: {params: of({id: 123})}}
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('loads an id from the activated route', () => {
    const spyRoute = spyOn(route.snapshot.paramMap, 'get');
    spyRoute.and.returnValue("1");

    component.ngOnInit();

    expect(component.id).toEqual("1");
  });

  // it('loads data from the character service', () => {
  //   // component.ngOnInit();

  // })
});
