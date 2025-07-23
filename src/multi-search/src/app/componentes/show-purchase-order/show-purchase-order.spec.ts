import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPurschaseOrder } from './show-purchase-order';

describe('ShowPurschaseOrder', () => {
  let component: ShowPurschaseOrder;
  let fixture: ComponentFixture<ShowPurschaseOrder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowPurschaseOrder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPurschaseOrder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
