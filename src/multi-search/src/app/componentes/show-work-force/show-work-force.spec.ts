import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWorkForce } from './show-work-force';

describe('ShowWorkForce', () => {
  let component: ShowWorkForce;
  let fixture: ComponentFixture<ShowWorkForce>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowWorkForce]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowWorkForce);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
