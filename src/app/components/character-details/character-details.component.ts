import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import Character from '../../models/Character';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  public id : number;
  public character : Character;

  constructor(private characterService: CharacterService, private activatedRoute: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    // this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.activatedRoute.paramMap.subscribe((params : ParamMap) => {
      this.id = +params.get('id');
    })
    
    this.characterService.getCharacter(this.id).subscribe(character => {
      this.character = character;
    });
  }

}
