import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeNaissComponent } from './liste-naiss.component';

describe('ListeNaissComponent', () => {
  let component: ListeNaissComponent;
  let fixture: ComponentFixture<ListeNaissComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeNaissComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeNaissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
