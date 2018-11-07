import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';

declare const TEST_FIXTURE: string

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private newService: CommonService, ) { }
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

}  