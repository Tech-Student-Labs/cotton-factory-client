import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../shared/film';

@Component({
  selector: 'app-films-detail',
  templateUrl: './films-detail.component.html',
  styleUrls: ['./films-detail.component.css']
})
export class FilmsDetailComponent implements OnInit {
  @Input() film: Film;

  constructor() { }

  ngOnInit(): void {
  }

}
