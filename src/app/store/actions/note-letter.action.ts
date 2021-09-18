import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../action-types';

export const noteLetterSelectAction = createAction(
  ActionTypes.NOTE_LETTER_SELECT,
  props<{ noteLetter: string }>()
);
