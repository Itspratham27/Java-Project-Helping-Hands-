import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyFeedingProgramComponent } from './daily-feeding-program.component';

describe('DailyFeedingProgramComponent', () => {
  let component: DailyFeedingProgramComponent;
  let fixture: ComponentFixture<DailyFeedingProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyFeedingProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyFeedingProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
