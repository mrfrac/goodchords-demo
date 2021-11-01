import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../action-types';
// todo: path refactoring
import { IScale } from 'goodchords/dist/scale/interfaces';

export const scaleSelectAction = createAction(
  ActionTypes.SCALE_SELECT,
  props<{ scale: IScale }>()
);
