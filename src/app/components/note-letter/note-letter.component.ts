import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { noteLetterSelectAction } from '../../store/actions/note-letter.action';
import { Observable } from 'rxjs';
import { noteLetterSelector } from '../../store/selectors';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-note-letter',
  templateUrl: './note-letter.component.html',
  styleUrls: ['./note-letter.component.scss'],
})
export class NoteLetterComponent implements OnInit {
  @Input() noteLetter: string;
  selected$: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initValues();
  }

  onNoteLetterClicked(): void {
    this.store.dispatch(
      noteLetterSelectAction({ noteLetter: this.noteLetter })
    );
  }

  private initValues(): void {
    this.selected$ = this.store.pipe(
      select(noteLetterSelector),
      map((noteLetter) => {
        return noteLetter === this.noteLetter;
      })
    );
  }
}
