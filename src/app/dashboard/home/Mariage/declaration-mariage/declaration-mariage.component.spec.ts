import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationMariageComponent } from './declaration-mariage.component';

describe('DeclarationMariageComponent', () => {
  let component: DeclarationMariageComponent;
  let fixture: ComponentFixture<DeclarationMariageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclarationMariageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationMariageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
