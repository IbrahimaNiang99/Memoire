import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationNaissComponent } from './declaration-naiss.component';

describe('DeclarationNaissComponent', () => {
  let component: DeclarationNaissComponent;
  let fixture: ComponentFixture<DeclarationNaissComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclarationNaissComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationNaissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
