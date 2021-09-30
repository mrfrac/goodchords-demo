import { Note, Scale } from 'goodchords';

export interface AppStateInterface {
  note: Note | null;
  scale: Scale | null;
}
