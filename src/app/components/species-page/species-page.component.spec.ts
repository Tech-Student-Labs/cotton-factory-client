import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD
=======

>>>>>>> faf188c2b0cdda88241e982a8e4d7a6222951e06
import { SpeciesPageComponent } from './species-page.component';

describe('SpeciesPageComponent', () => {
  let component: SpeciesPageComponent;
  let fixture: ComponentFixture<SpeciesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeciesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
