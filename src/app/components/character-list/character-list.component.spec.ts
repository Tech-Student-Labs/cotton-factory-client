import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterListComponent } from './character-list.component';
import  Character  from '../../models/Character';
<<<<<<< HEAD
import characterArray from '../../tests/data/Character.json';
import { CharacterService } from 'src/app/services/character.service';
import { MockCharacterService } from 'src/app/tests/data/character-service-abstract';
=======
import characterArray from '../../Character.json';
import { CharacterService } from 'src/app/services/character.service';
import { MockCharacterService } from 'src/app/services/character-service-abstract';
>>>>>>> faf188c2b0cdda88241e982a8e4d7a6222951e06
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;
  let html;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule, AppRoutingModule],
      declarations: [ CharacterListComponent ],
      providers: [{provider: CharacterService, useClass: MockCharacterService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
    html = fixture.nativeElement;
    component.characterList = characterArray as Character[];
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should display characters from a list", () =>{
    expect(html.querySelector('app-character')).toBeTruthy();
  })

  it('should use Character service to render a character comp for each character on current page', () => {
    expect(component.characterList.length).toEqual(characterArray.length);
    expect(html.querySelectorAll('app-character').length).toEqual(characterArray.length);
  });

});
