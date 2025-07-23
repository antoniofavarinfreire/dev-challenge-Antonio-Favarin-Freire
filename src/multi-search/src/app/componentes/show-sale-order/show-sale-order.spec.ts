import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSaleOrder } from './show-sale-order';

describe('ShowSaleOrder', () => {
  let component: ShowSaleOrder;
  let fixture: ComponentFixture<ShowSaleOrder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowSaleOrder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSaleOrder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
