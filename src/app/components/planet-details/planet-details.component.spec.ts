import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanetMockServiceService } from 'src/app/services/planet-mock-service.service';
import { PlanetService } from 'src/app/services/planet.service';

import { PlanetComponentDetails } from './planet-details.component';

describe('PlanetComponent', () => {
  let component: PlanetComponentDetails;
  let fixture: ComponentFixture<PlanetComponentDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetComponentDetails ],
      providers: [ { provide: PlanetService, useClass: PlanetMockServiceService }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetComponentDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should render the h1 as Planets in a Galexy far far away...', () => {
  //   expect(fixture.nativeElement.querySelector('#title').innerHTML).toMatch('Planets in a Galexy far far away...');
  // });
});
