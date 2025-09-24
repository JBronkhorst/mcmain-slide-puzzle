import { Pipe, PipeTransform } from '@angular/core';
import { PuzzleTileModel } from '../model/puzzle-tile-model';
import { PuzzleService } from '../services/puzzle-service';

@Pipe({
  name: 'puzzleSolved',
  standalone: true
})
export class PuzzleSolvedPipe implements PipeTransform {

  constructor(private puzzleService: PuzzleService) {}

  transform(tiles: PuzzleTileModel[]): boolean {
    // Convert tile objects into an array of IDs (numbers)
    const tileIds = tiles.map(tile => tile.id);
    return this.puzzleService.isSolved(tileIds);
  }
}
