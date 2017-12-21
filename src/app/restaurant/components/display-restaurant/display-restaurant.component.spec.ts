import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRestaurantComponent } from './display-restaurant.component';

describe('DisplayRestaurantComponent', () => {
  let component: DisplayRestaurantComponent;
  let fixture: ComponentFixture<DisplayRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
