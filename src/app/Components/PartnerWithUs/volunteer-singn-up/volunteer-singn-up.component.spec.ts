import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerSingnUpComponent } from './volunteer-singn-up.component';

describe('VolunteerSingnUpComponent', () => {
  let component: VolunteerSingnUpComponent;
  let fixture: ComponentFixture<VolunteerSingnUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerSingnUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerSingnUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
