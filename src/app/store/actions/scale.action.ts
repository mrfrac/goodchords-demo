import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../action-types';
import { Scale } from 'goodchords';

export const scaleSelectAction = createAction(
  ActionTypes.SCALE_SELECT,
  props<{ scale: Scale }>()
);
