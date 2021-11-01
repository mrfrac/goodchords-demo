import { Component, OnDestroy, OnInit } from '@angular/core';
import { Note, Scale } from 'goodchords';
import { select, Store } from '@ngrx/store';
import { IScale } from 'goodchords/dist/scale/interfaces';
import { Subject } from 'rxjs';
import { noteSelector, scaleSelector } from '../../store/selectors';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-scale-info',
  templateUrl: './scale-info.component.html',
  styleUrls: ['./scale-info.component.css'],
})
export class ScaleInfoComponent implements OnInit, OnDestroy {
  currentScale: Scale;
  selectedNote: Note;
  selectedScale: IScale;
  private ngUnsubscribe = new Subject<void>();

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store
      .pipe(select(noteSelector), takeUntil(this.ngUnsubscribe))
      .subscribe((note) => {
        if (note) {
          this.selectedNote = note;
        } else {
          this.selectedNote = null;
        }
        this.refreshCurrentScale();
      });

    this.store
      .pipe(select(scaleSelector), takeUntil(this.ngUnsubscribe))
      .subscribe((scale) => {
        this.selectedScale = scale;
        this.refreshCurrentScale();
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  getScaleName(): string {
    if (this.selectedScale) {
      let name = this.selectedScale?.name ? this.selectedScale.name : 'N/A';

      if (
        this.selectedScale.altNames &&
        this.selectedScale.altNames.length > 0
      ) {
        name += ` (${this.selectedScale.altNames.join(', ')})`;
      }

      return name;
    }
    return '';
  }

  private refreshCurrentScale(): void {
    if (this.selectedScale && this.selectedNote) {
      this.currentScale = new Scale(
        this.selectedNote,
        this.selectedScale.formula as string[]
      );
    } else {
      this.currentScale = null;
    }

    console.log(this);
  }
}
