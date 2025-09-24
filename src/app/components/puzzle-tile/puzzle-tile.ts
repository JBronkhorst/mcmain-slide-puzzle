import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PuzzleTileModel } from '../../model/puzzle-tile-model';

@Component({
  selector: 'app-puzzle-tile',
  standalone: true,
  imports: [CommonModule],        // Import CommonModule for common Angular directives
  templateUrl: './puzzle-tile.html',
  styleUrl: './puzzle-tile.scss'
})
export class PuzzleTile {
  @Input() index!: number;          // The tile's current index in the grid
  @Input() size!: number;           // Grid size 
  @Input() value!: PuzzleTileModel; // The data for this tile (id and position)

  // Calculates the SCSS background position for this tile based on its id and the grid size
  get backgroundPosition(): string {
    const row = Math.floor((this.value.id - 1) / this.size);   // Determine row in the grid
    const col = (this.value.id - 1) % this.size;               // Determine column in the grid
    return `-${col * 100}px -${row * 100}px`;                  // Return SCSS string for background-position
  }
}
