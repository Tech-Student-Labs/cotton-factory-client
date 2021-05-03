import { fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppRoutingModule } from '../app/app-routing.module';

describe('App Routes', () => {
  let router: Router;
  let location: Location;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, AppRoutingModule ]
    }).compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  it('should navigate', fakeAsync(() => {
    router.navigate(['characterList']);
    tick();
    expect(location.path()).toBe('/characterList');

    router.navigate(['character']);
    tick();
    expect(location.path()).toBe('/character');

    router.navigate(['planet']);
    tick();
    expect(location.path()).toBe('/planet');

    router.navigate(['planetsList']);
    tick();
    expect(location.path()).toBe('/planetsList');

    router.navigate(['speciesDetails']);
    tick();
    expect(location.path()).toBe('/speciesDetails');

    router.navigate(['species']);
    tick();
    expect(location.path()).toBe('/species');

    router.navigate(['speciesPage']);
    tick();
    expect(location.path()).toBe('/speciesPage');
  }));
});
