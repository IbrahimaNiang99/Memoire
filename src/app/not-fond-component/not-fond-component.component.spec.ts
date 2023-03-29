import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFondComponentComponent } from './not-fond-component.component';

describe('NotFondComponentComponent', () => {
  let component: NotFondComponentComponent;
  let fixture: ComponentFixture<NotFondComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFondComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFondComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
