import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMariageComponent } from './liste-mariage.component';

describe('ListeMariageComponent', () => {
  let component: ListeMariageComponent;
  let fixture: ComponentFixture<ListeMariageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeMariageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeMariageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
