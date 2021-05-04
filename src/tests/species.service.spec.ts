import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { SpeciesService } from 'src/app/services/species.service';
import species from 'src/app/tests/data/Species.json';



describe('SpeciesService', () => {
  let service: SpeciesService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [],
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new SpeciesService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all species objects', () => {
    httpClientSpy.get.and.returnValue(of(species));
    service.getAll().subscribe(data => {
      expect(data.results[1]).toEqual(species.results[1]);
      expect(data.results.length).toEqual(3);
    });
  });

  it('should get a species by id', () => {
    httpClientSpy.get.and.returnValue(of(species.results[0]));
    service.getById(0).subscribe(data => {
      expect(data).toEqual(species.results[0]);
    });
  });
});
