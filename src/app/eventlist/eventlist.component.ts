import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { EventService } from '../_services/event.service';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {

  constructor(public snackBar: MatSnackBar, private newService: EventService, ) { }

  Repdata;
  dateNow = new Date(Date.now());

  ngOnInit() {
    this.newService.GetEvent().subscribe(data => {
      this.Repdata = data;
      data.forEach(element => {
        element.time = new Date(element.time);
      });
    });
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
      .subscribe(data => { this.openSnackBar(data.data, data.action); this.ngOnInit(); }, error => this.errorMessage = error)
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
