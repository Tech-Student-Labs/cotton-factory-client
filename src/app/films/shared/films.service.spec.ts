import { TestBed } from '@angular/core/testing';

import { FilmsService } from './films.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import responseJson from '../../shared/fixtures/api-response.json';

describe('FilmsService', () => {
  let service: FilmsService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ FilmsService ]
    });
    service = TestBed.inject(FilmsService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the list of all films (HTTP)', () => {
    service.getAllFilms().subscribe(); // start request

    const request = httpController.expectOne(service.apiUrl);
    request.flush(responseJson); // data to return for request
    httpController.verify(); // assertion; expects one request to url above
    expect(service.films.length).toEqual(responseJson.count);
  });
});
