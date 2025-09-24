import { Component, signal } from '@angular/core';
import { PuzzleBoard } from './components/puzzle-board/puzzle-board';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PuzzleBoard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor(private title: Title) {
    this.title.setTitle('McMain Schuifpuzzel');
  }
}
