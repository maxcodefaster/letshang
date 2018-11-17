import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';
import { StepState } from '@covalent/core/steps';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {MatSnackBar} from '@angular/material';

declare const TEST_FIXTURE: string

/* todo: 
fix next stepper button
fix timeformat in form => set LOCALE_ID on runtime to onScreen Language
add userregister form & database
add comment function
add geo location filter */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private newService: CommonService,  private breakpointObserver: BreakpointObserver, public snackBar: MatSnackBar) { 
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
       this.openSnackBar();

        this.ngOnInit();
      }
        , error => this.errorMessage = error)

  }
  edit = function (kk) {
    this.id = kk._id;
    this.name = kk.name;
    this.message = kk.message;
    this.eventtyp = kk.eventtyp;
    this.time = kk.time;
    this.valbutton = "Update";
  }

  delete = function (id) {
    this.newService.deleteEvent(id)
      .subscribe(data => { alert(data.data); this.ngOnInit(); }, error => this.errorMessage = error)
  }

  // show snackbar on save
  openSnackBar(message: string, action: string) {
    this.snackBar.open("Your Activity has been published", "Nice!", {
      duration: 2000,
    });
  }

  // make stepper responsive

  stepperMode = 'horizontal';
  smallScreen: boolean;

  // stepper Next & Back buttons

  stateStep2: StepState = StepState.Required;
  stateStep3: StepState = StepState.Complete;

  toggleRequiredStep2(): void {
    this.stateStep2 = (this.stateStep2 === StepState.Required ? StepState.None : StepState.Required);
  }

  toggleCompleteStep3(): void {
    this.stateStep3 = (this.stateStep3 === StepState.Complete ? StepState.None : StepState.Complete);
  } 

}  