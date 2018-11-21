import { Component, OnInit } from '@angular/core';
import { EventService } from '../_services/event.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { DateTimeAdapter } from 'ng-pick-datetime';

@Component({
  selector: 'app-eventwizard',
  templateUrl: './eventwizard.component.html',
  styleUrls: ['./eventwizard.component.css']
})
export class EventwizardComponent implements OnInit {

  constructor(private newService: EventService, private breakpointObserver: BreakpointObserver, public snackBar: MatSnackBar, translate: TranslateService, dateAdapter: DateTimeAdapter<any>) {
    // stepper responsive
    breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small
    ]).subscribe(result => {
      this.smallScreen = result.matches;
      if (this.smallScreen) {
        this.stepperMode = 'vertical';
      } else {
        this.stepperMode = 'horizontal';
      }
    });
    this.locale = translate.getBrowserCultureLang();
    dateAdapter.setLocale(this.locale);
  }
  Repdata;
  valbutton = "Save";
  dateNow = new Date(Date.now());
  signedIn = false;
  name = null;
  eventtypThingy = null;
  time = null;
  timeframe = null;
  message = null;
  step = null;
  locale = "";


  ngOnInit() {
    this.newService.GetEvent().subscribe(data => {
      this.Repdata = data;
      data.forEach(element => {
        element.time = new Date(element.time);
      });
    });

  }

  onSave = function (event) {
    event.mode = this.valbutton;
    this.newService.saveEvent(event)
      .subscribe(data => {
        this.openSnackBar(data.data, data.action);
        this.ngOnInit();
      }
        , error => this.errorMessage = error)

  }
  

  // show snackbar
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  // make stepper responsive

  stepperMode = 'horizontal';
  smallScreen: boolean;

}  