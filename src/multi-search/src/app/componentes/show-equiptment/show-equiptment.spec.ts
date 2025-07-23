import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEquiptment } from './show-equiptment';

describe('ShowEquiptment', () => {
  let component: ShowEquiptment;
  let fixture: ComponentFixture<ShowEquiptment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowEquiptment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowEquiptment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
