import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeNavbarComponent } from './pokenavbar.component';

describe('PokeNavbarComponent', () => {
  let component: PokeNavbarComponent;
  let fixture: ComponentFixture<PokeNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
