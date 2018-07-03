import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfsInfiniteScrollComponent } from './cfs-infinite-scroll.component';

describe('CfsInfiniteScrollComponent', () => {
  let component: CfsInfiniteScrollComponent;
  let fixture: ComponentFixture<CfsInfiniteScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfsInfiniteScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfsInfiniteScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
