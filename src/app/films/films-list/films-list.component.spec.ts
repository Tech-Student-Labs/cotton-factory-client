import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { FilmsListComponent } from './films-list.component';
import { FilmsService } from '../shared/films.service';
import { Observable, of } from 'rxjs';
import responseJson from '../../shared/fixtures/api-response.json';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FilmsDetailComponent} from '../films-detail/films-detail.component';

const filmServiceStub = {
  getAllFilms: () => of(responseJson)
};

describe('FilmsListComponent', () => {
  let component: FilmsListComponent;
  let fixture: ComponentFixture<FilmsListComponent>;
  let html;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      declarations: [ FilmsListComponent, FilmsDetailComponent ],
      providers: [
        { provide: FilmsService, useValue: filmServiceStub }
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsListComponent);
    component = fixture.componentInstance;
    html = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get a list of films', () => {
    expect(component.films.length).toEqual(responseJson.count);
  });

  it('should render list of films detail', () => {
    expect(html.querySelector('app-films-detail')).toBeTruthy();
  });
});
