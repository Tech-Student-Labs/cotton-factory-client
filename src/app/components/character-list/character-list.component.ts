import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import Character from '../../models/Character';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characterList : Character[];

  constructor(private characterService : CharacterService) {

   }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe( (data) => {
      this.characterList = data.results;
    });
  }

}
