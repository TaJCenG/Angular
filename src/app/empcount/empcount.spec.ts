import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Empcount } from './empcount';

describe('Empcount', () => {
  let component: Empcount;
  let fixture: ComponentFixture<Empcount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Empcount],
    }).compileComponents();

    fixture = TestBed.createComponent(Empcount);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
