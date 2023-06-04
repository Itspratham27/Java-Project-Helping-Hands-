import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelSignUpComponent } from './hotel-sign-up.component';

describe('HotelSignUpComponent', () => {
  let component: HotelSignUpComponent;
  let fixture: ComponentFixture<HotelSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelSignUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
