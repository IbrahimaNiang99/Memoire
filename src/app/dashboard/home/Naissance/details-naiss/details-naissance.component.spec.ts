import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsNaissanceComponent } from './details-naissance.component';

describe('DetailsNaissanceComponent', () => {
  let component: DetailsNaissanceComponent;
  let fixture: ComponentFixture<DetailsNaissanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsNaissanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsNaissanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
