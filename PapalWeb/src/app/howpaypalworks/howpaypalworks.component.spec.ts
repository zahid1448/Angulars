import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowpaypalworksComponent } from './howpaypalworks.component';

describe('HowpaypalworksComponent', () => {
  let component: HowpaypalworksComponent;
  let fixture: ComponentFixture<HowpaypalworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowpaypalworksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowpaypalworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
