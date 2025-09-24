import { Injectable } from '@angular/core';
import { PuzzleTileModel } from '../model/puzzle-tile-model';

@Injectable({ providedIn: 'root' })
export class PuzzleService {
  readonly size = 4; // Defines the puzzle grid size (4x4)

  // Create an array of IDs for tiles (1 to 15)
  // Shuffle IDs using Fisher-Yates algorithm to ensure randomness
  // Map shuffles IDs into tile objects with their position index
  generateTiles(): PuzzleTileModel[] {
    const ids = Array.from({ length: 15 }, (_, i) => i + 1);
    for (let i = ids.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [ids[i], ids[j]] = [ids[j], ids[i]];
    }
  
    const tiles = ids.map((id, index) => ({ id, position: index }));
    tiles.push({ id: 0, position: 15 }); // Empty slot bottom-right
    return tiles;
  }
  
  // Convert linear index into row/column coordinates
  // Tiles are adjacent if they are horizontally or vertically next to the empty slot.
  isAdjacent(index: number, emptyIndex: number): boolean {
    const row = Math.floor(index / this.size);
    const col = index % this.size;
    const emptyRow = Math.floor(emptyIndex / this.size);
    const emptyCol = emptyIndex % this.size;
    return (row === emptyRow && Math.abs(col - emptyCol) === 1) ||
           (col === emptyCol && Math.abs(row - emptyRow) === 1);
  }

  // Check if tiles are in the correct order: 1...15 followed by the empty slot (0)
  // Last position must always be the empty slot.
  isSolved(tiles: number[]): boolean {
    for (let i = 0; i < tiles.length - 1; i++) {
      if (tiles[i] !== i + 1) return false;
    }
    return tiles[tiles.length - 1] === 0;
  }
}
