import { AppStateInterface } from '../types/app-state.interface';

import { Action, createReducer, on } from '@ngrx/store';
import { selectNoteAction } from './actions/note.action';
import { scaleSelectAction } from './actions/scale.action';
import { noteLetterSelectAction } from './actions/note-letter.action';

const initialState: AppStateInterface = {
  note: null,
  scale: null,
  noteLetter: null,
};

const noteReducer = createReducer(
  initialState,
  on(selectNoteAction, (state, data) => ({
    ...state,
    note: data.note,
  })),
  on(scaleSelectAction, (state, data) => ({
    ...state,
    scale: data.scale,
  })),
  on(noteLetterSelectAction, (state, data) => ({
    ...state,
    noteLetter: data.noteLetter,
  }))
);

export function reducers(
  state: AppStateInterface,
  action: Action
): AppStateInterface {
  return noteReducer(state, action);
}
