import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

/* Localization */
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';

registerLocaleData(localeDe);

/* material components */
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material';

import {TranslateModule} from '@ngx-translate/core';


/* Covalent components */
import { CovalentStepsModule } from '@covalent/core/steps';

/* Components & Pipes */
import { AppComponent } from './app.component';
import { EventTypIcon } from './eventtypicon.pipe';

import { EventService } from './_services/event.service';
import { EventwizardComponent } from './eventwizard/eventwizard.component';
import { EventlistComponent } from './eventlist/eventlist.component';

@NgModule({
  declarations: [
    AppComponent,
    EventTypIcon,
    EventwizardComponent,
    EventlistComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatToolbarModule,
    MatCardModule,
    MatTooltipModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatFormFieldModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    FlexLayoutModule,
    CovalentStepsModule,
    TranslateModule.forRoot()
  ],
  providers: [
    EventService,
    {provide: OWL_DATE_TIME_LOCALE, useValue: 'fr'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
