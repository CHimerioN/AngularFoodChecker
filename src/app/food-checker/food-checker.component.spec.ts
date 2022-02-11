import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCheckerComponent } from './food-checker.component';

describe('FoodCheckerComponent', () => {
  let component: FoodCheckerComponent;
  let fixture: ComponentFixture<FoodCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodCheckerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
