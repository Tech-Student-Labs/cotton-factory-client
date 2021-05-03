import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { NavComponent } from './nav.component';

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
    expect(html.querySelector('#linkSpecies')).toBeTruthy();
    expect(html.querySelector('#linkStarships')).toBeTruthy();
    expect(html.querySelector('#linkHome')).toBeTruthy();
    expect(html.querySelector('#searchInput')).toBeTruthy();
    expect(html.querySelector('#searchButton')).toBeTruthy();

    // dummy test(s)
    expect(html.querySelector('#badLink')).toBeFalsy();
  });
});
