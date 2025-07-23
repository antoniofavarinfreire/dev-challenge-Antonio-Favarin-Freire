import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMaterial } from './show-material';

describe('ShowMaterial', () => {
  let component: ShowMaterial;
  let fixture: ComponentFixture<ShowMaterial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowMaterial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMaterial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
