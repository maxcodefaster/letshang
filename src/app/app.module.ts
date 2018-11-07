import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';
import { OwlMomentDateTimeModule } from 'ng-pick-datetime-moment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
/* material components */
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';  

import { AppComponent } from './app.component';
import { EventTypIcon } from './eventtypicon.pipe';


import {CommonService} from './common.service';  

export const MY_MOMENT_FORMATS = {
  parseInput: 'YYYY-MM-DD kk-mm-ss',
  fullPickerInput: 'LLL',
  monthYearLabel: 'LLL',
  dateA11yLabel: 'LLL',
  monthYearA11yLabel: 'LLL',
};


@NgModule({
  declarations: [
    AppComponent,
    EventTypIcon
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
    MatStepperModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    OwlMomentDateTimeModule
  ],
  providers: [
    {provide: OWL_DATE_TIME_FORMATS, useValue: MY_MOMENT_FORMATS},
    CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
