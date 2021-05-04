import { HtmlParser } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterComponent } from './character.component';
import characterArray from '../../character.json';
import { convertCharacter } from 'src/app/shared/utilities';

describe('CharacterComponent', () => {
  let component: CharacterComponent;
  let fixture: ComponentFixture<CharacterComponent>;
  let html;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterComponent);
    component = fixture.componentInstance;
    component.character = convertCharacter(characterArray[0]);
    html = fixture.nativeElement;
    component.character = convertCharacter(characterArray[0]);
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render character name and image', () =>{
    expect(html.querySelector('#name')).toBeTruthy();
    expect(html.querySelector('#image')).toBeTruthy();
  })

  it('should render character name and image from character object', () => {
    expect(html.querySelector('#name').innerHTML).toEqual(characterArray[0].name);
  })

});
