import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSearch } from './show-search';

describe('ShowSearch', () => {
  let component: ShowSearch;
  let fixture: ComponentFixture<ShowSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
