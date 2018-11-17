import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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


/* Covalent components */
import { CovalentStepsModule } from '@covalent/core/steps';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { EventTypIcon } from './eventtypicon.pipe';
import { LocalizedDatePipe } from './localizedDate.pipe';
import { LOCALE_ID } from '@angular/core';


import { CommonService } from './common.service';

@NgModule({
  declarations: [
    AppComponent,
    EventTypIcon,
    LocalizedDatePipe
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
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    FlexLayoutModule,
    CovalentStepsModule
  ],
  providers: [
   /*  {
      provide: LOCALE_ID,
      useValue: [LocalizedDate]
    }, */
    CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
