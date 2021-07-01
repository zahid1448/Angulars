import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalbrandsComponent } from './paypalbrands.component';

describe('PaypalbrandsComponent', () => {
  let component: PaypalbrandsComponent;
  let fixture: ComponentFixture<PaypalbrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaypalbrandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypalbrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
