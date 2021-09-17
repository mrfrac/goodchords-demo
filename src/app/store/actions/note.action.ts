import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../action-types';
import { Note } from 'goodchords';

export const selectNoteAction = createAction(
  ActionTypes.NOTE_SELECT,
  props<{ note: Note }>()
);
