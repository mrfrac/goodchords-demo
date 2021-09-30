import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { Note } from '../../../../../goodchords';
import { takeUntil } from 'rxjs/operators';
import { noteSelector } from '../../store/selectors';
import { selectNoteAction } from '../../store/actions/note.action';

@Component({
  selector: 'app-note-selector',
  templateUrl: './note-selector.component.html',
  styleUrls: ['./note-selector.component.scss'],
})
export class NoteSelectorComponent implements OnInit, OnDestroy {
  noteLetters = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  octaves = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  accidentals = [
    {
      label: '#',
      value: '#',
    },
    {
      label: 'b',
      value: 'b',
    },
    {
      label: 'n/a',
      value: '',
    },
  ];
  selectedAccidental: string = null;
  selectedNote: string = null;
  selectedOctave: number = null;
  private ngUnsubscribe = new Subject<void>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store
      .pipe(select(noteSelector), takeUntil(this.ngUnsubscribe))
      .subscribe((note) => {
        if (note) {
          const noteInfo = note.info();
          this.selectedOctave = noteInfo.octave;
          this.selectedNote = noteInfo.symbol;
          this.selectedAccidental = noteInfo.accidental.asString;
        }
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onNoteLetterClicked(letter: string): void {
    const newNote = new Note(
      letter,
      this.selectedAccidental,
      this.selectedOctave
    );

    if (this.getCurrentNote().number() !== newNote.number()) {
      this.store.dispatch(selectNoteAction({ note: newNote }));
    }
  }

  onOctaveValueChanged(): void {
    const newNote = new Note(
      this.selectedNote,
      this.selectedAccidental,
      this.selectedOctave
    );

    this.store.dispatch(selectNoteAction({ note: newNote }));
  }

  onAccidentalClicked(acc: string): void {
    const newNote = new Note(this.selectedNote, acc, this.selectedOctave);

    if (newNote.number() !== this.getCurrentNote().number()) {
      this.selectedAccidental = acc;
      this.store.dispatch(selectNoteAction({ note: newNote }));
    }
  }

  private getCurrentNote(): Note {
    return new Note(
      this.selectedNote,
      this.selectedAccidental,
      this.selectedOctave
    );
  }
}
