import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleTile } from './puzzle-tile';

describe('PuzzleTile', () => {
  let component: PuzzleTile;
  let fixture: ComponentFixture<PuzzleTile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuzzleTile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuzzleTile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
