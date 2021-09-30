import { Component, OnDestroy, OnInit } from '@angular/core';
import { Note } from 'goodchords';
import { Observable, Subject } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { takeUntil, tap } from 'rxjs/operators';
import { noteSelector } from '../../store/selectors';

@Component({
  selector: 'app-scale-selector',
  templateUrl: './scale-selector.component.html',
  styleUrls: ['./scale-selector.component.scss'],
})
export class ScaleSelectorComponent implements OnInit, OnDestroy {
  selectedNote$: Observable<Note>;
  private ngUnsubscribe = new Subject<void>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initValues();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private initValues(): void {
    this.selectedNote$ = this.store.pipe(
      select(noteSelector),
      tap((note) => {
        console.log(note.toString(), 'selected');
      }),
      takeUntil(this.ngUnsubscribe)
    );
  }
}
