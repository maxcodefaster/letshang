import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';
import { StepState } from '@covalent/core/steps';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

declare const TEST_FIXTURE: string

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private newService: CommonService,  private breakpointObserver: BreakpointObserver) { 
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

  ngOnInit() {
    this.newService.GetEvent().subscribe(data => {
      this.Repdata = data;
      data.forEach(element => {
        element.time = new Date(element.time);
      });
    });

  }

  onSave = function (event, isValid: boolean) {
    event.mode = this.valbutton;
    this.newService.saveEvent(event)
      .subscribe(data => {
        alert(data.data);

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

  // make stepper responsive

  stepperMode = 'horizontal';
  smallScreen: boolean;

 

}  