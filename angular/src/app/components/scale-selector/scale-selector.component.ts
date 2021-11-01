import { Component, OnDestroy, OnInit } from '@angular/core';
import { Note, Scale } from 'goodchords';
import { Observable, Subject } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { takeUntil, tap } from 'rxjs/operators';
import { noteSelector, scaleSelector } from '../../store/selectors';
import { scaleSelectAction } from '../../store/actions/scale.action';
import { IScale } from 'goodchords/dist/scale/interfaces';

@Component({
  selector: 'app-scale-selector',
  templateUrl: './scale-selector.component.html',
  styleUrls: ['./scale-selector.component.scss'],
})
export class ScaleSelectorComponent implements OnInit, OnDestroy {
  selectedNote$: Observable<Note>;
  selectedScale$: Observable<IScale>;
  scales = Scale.getScales();
  private ngUnsubscribe = new Subject<void>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initValues();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onScaleSelect(event: Event): void {
    if (event?.target instanceof HTMLSelectElement) {
      const value = event.target.value;
      if (value) {
        const selectedScale = this.scales.find((item) => item.name === value);
        this.store.dispatch(scaleSelectAction({ scale: selectedScale }));
      }
    }
  }

  private initValues(): void {
    this.selectedNote$ = this.store.pipe(
      select(noteSelector),
      tap((note) => {
        console.log(note.toString(), 'selected');
      }),
      takeUntil(this.ngUnsubscribe)
    );

    this.selectedScale$ = this.store.pipe(
      select(scaleSelector),
      tap((scale) => {
        console.log('scale selected', scale);
      }),
      takeUntil(this.ngUnsubscribe)
    );
  }
}
