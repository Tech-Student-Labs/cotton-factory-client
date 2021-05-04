import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from "@angular/common/http/testing";
import { of } from "rxjs";
<<<<<<< HEAD:src/app/tests/character.service.spec.ts
import Character from '../models/Character';
import characters from "./data/Character.json";
import { CharacterService } from "../services/character.service";
import { convertCharacter } from "../shared/utilities";
=======

import Character from '../app/models/Character';
import characters from "../app/tests/data/Character.json";
import { CharacterService } from '../app/services/character.service';

import { convertCharacter } from "../app/shared/utilities";
>>>>>>> 3469b56a63b3f20c6fa1aca7630aeaa0a0cd9268:src/tests/character.service.spec.ts

describe('CharacterService', () => {
  let service: CharacterService;
  let httpClientSpy: {get: jasmine.Spy};
  let httpTestingController: HttpClientTestingModule;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = TestBed.inject(CharacterService);
    httpTestingController = TestBed.get(HttpClientTestingModule);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getCharacter should be definied and return the characters', () => {
    const OneCharacter: Character = convertCharacter(characters[0]);

    httpClientSpy.get.and.returnValue(of(OneCharacter));
    expect(service.getCharacter()).toBeDefined();

    service.getCharacter(1).subscribe((data)=>{
      expect(data).toEqual(OneCharacter);
    })

  });

  it('getCharacters should be defined and return the list of characters', () => {
    const listOfCharacters: Character[] = characters.map(char => convertCharacter(char));

    httpClientSpy.get.and.returnValue(of(listOfCharacters));
    expect(service.getCharacters()).toBeDefined();

    service.getCharacters(1).subscribe((data)=>{
      expect(data).toEqual(listOfCharacters);
    });
  });
  

});
