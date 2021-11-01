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
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScaleInfoComponent } from './components/scale-info/scale-info.component';

@NgModule({
  declarations: [AppComponent, NoteSelectorComponent, ScaleSelectorComponent, ScaleInfoComponent],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ app: reducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
