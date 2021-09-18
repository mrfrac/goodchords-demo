import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-selector',
  templateUrl: './note-selector.component.html',
  styleUrls: ['./note-selector.component.scss'],
})
export class NoteSelectorComponent implements OnInit {
  noteLetters: string[] = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

  constructor() {}

  ngOnInit(): void {}
}
