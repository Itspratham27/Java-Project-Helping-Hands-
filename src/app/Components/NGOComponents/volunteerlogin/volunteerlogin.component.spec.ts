import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerloginComponent } from './volunteerlogin.component';

describe('VolunteerloginComponent', () => {
  let component: VolunteerloginComponent;
  let fixture: ComponentFixture<VolunteerloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
