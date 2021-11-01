import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectNoteAction } from './store/actions/note.action';
import { Note, Scale } from 'goodchords';
import { scaleSelectAction } from './store/actions/scale.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(selectNoteAction({ note: Note.fromString('C4') }));
    this.store.dispatch(scaleSelectAction({ scale: Scale.getScales()[1] }));
  }
}
