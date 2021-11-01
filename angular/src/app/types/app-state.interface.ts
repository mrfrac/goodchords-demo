import { Note } from 'goodchords';
import { IScale } from 'goodchords/dist/scale/interfaces';

export interface AppStateInterface {
  note: Note | null;
  scale: IScale | null;
}
