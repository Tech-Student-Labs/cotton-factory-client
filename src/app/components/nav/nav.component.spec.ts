import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let html;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    html = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render routing links inside navbar', () => {
    expect(html.querySelector('#navCollapse')).toBeTruthy();
    expect(html.querySelector('#linkPlanets')).toBeTruthy();
    expect(html.querySelector('#linkPeople')).toBeTruthy();
    expect(html.querySelector('#linkStarships')).toBeTruthy();
    expect(html.querySelector('#linkHome')).toBeTruthy();

    // dummy test(s)
    expect(html.querySelector('#badLink')).toBeFalsy();
  });
});
