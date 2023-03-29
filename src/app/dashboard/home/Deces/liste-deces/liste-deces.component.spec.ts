import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDecesComponent } from './liste-deces.component';

describe('ListeDecesComponent', () => {
  let component: ListeDecesComponent;
  let fixture: ComponentFixture<ListeDecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDecesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
