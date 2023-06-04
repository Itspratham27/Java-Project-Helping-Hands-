import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReliefCampaignComponent } from './relief-campaign.component';

describe('ReliefCampaignComponent', () => {
  let component: ReliefCampaignComponent;
  let fixture: ComponentFixture<ReliefCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReliefCampaignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReliefCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
