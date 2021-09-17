import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoteSelectorComponent } from './components/note-selector/note-selector.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ScaleSelectorComponent } from './components/scale-selector/scale-selector.component';

@NgModule({
  declarations: [AppComponent, NoteSelectorComponent, ScaleSelectorComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ app: reducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
