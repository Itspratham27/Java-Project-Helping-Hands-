import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNgoComponent } from './all-ngo.component';

describe('AllNgoComponent', () => {
  let component: AllNgoComponent;
  let fixture: ComponentFixture<AllNgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllNgoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllNgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
