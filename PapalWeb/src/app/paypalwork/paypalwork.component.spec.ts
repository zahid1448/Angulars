import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalworkComponent } from './paypalwork.component';

describe('PaypalworkComponent', () => {
  let component: PaypalworkComponent;
  let fixture: ComponentFixture<PaypalworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaypalworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypalworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
