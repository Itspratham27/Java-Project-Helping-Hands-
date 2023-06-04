import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNgoOnlyComponent } from './list-ngo-only.component';

describe('ListNgoOnlyComponent', () => {
  let component: ListNgoOnlyComponent;
  let fixture: ComponentFixture<ListNgoOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNgoOnlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListNgoOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
