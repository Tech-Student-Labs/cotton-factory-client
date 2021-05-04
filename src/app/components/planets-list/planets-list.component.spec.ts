import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD
=======

>>>>>>> faf188c2b0cdda88241e982a8e4d7a6222951e06
import { PlanetsListComponent } from './planets-list.component';

describe('PlanetsListComponent', () => {
  let component: PlanetsListComponent;
  let fixture: ComponentFixture<PlanetsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the h1 as Planets in a Galexy far far away...', () => {
    expect(fixture.nativeElement.querySelector('#title').innerHTML).toMatch('Planets in a Galexy far far away...');
  });
});
