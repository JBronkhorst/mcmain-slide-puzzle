import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PuzzleService } from '../../services/puzzle-service';
import { PuzzleTile } from '../puzzle-tile/puzzle-tile';
import { PuzzleTileModel } from '../../model/puzzle-tile-model';
import { PuzzleSolvedPipe } from '../../pipes/puzzle-solved-pipe';

@Component({
  selector: 'app-puzzle-board',
  standalone: true,
  imports: [CommonModule, PuzzleTile, PuzzleSolvedPipe],
  templateUrl: './puzzle-board.html',
  styleUrl: './puzzle-board.scss'
})
export class PuzzleBoard {
  tiles: PuzzleTileModel[] = []; 
  size!: number;                 

  constructor(private puzzleService: PuzzleService) {
    this.size = this.puzzleService.size;              // Get grid size from service
    this.tiles = this.puzzleService.generateTiles();  // Generate shuffled puzzle tiles
  }

  // Handles a tile click and moves it if adjacent to the empty space
  move(index: number): void {
    const clickedTile = this.tiles[index];
    const emptyTile = this.tiles.find(t => t.id === 0)!;

    // Check if clicked tile is adjacent to the empty slot
    if (this.puzzleService.isAdjacent(clickedTile.position, emptyTile.position)) {
      // Swap positions
      const temp = clickedTile.position;
      clickedTile.position = emptyTile.position;
      emptyTile.position = temp;

      // Sort tiles by position to maintain correct order in the array
      this.tiles = [...this.tiles].sort((a, b) => a.position - b.position);
    }
  }
}
