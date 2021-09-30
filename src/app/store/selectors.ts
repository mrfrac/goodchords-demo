import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from '../types/app-state.interface';

export const appRootSelector = createFeatureSelector<AppStateInterface>('app');

export const noteSelector = createSelector(
  appRootSelector,
  (state) => state.note
);
