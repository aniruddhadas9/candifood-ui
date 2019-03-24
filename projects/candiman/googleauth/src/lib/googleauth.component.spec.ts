import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleauthComponent } from './googleauth.component';

describe('GoogleauthComponent', () => {
  let component: GoogleauthComponent;
  let fixture: ComponentFixture<GoogleauthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleauthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
