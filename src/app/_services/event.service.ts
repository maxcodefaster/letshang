import { Injectable } from '@angular/core';   
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
   
import { Observable } from 'rxjs';  
import { map, filter, scan } from 'rxjs/operators';
import { environment } from '../environments/environment';
  
@Injectable()  
export class EventService {  
  
  constructor(private http: Http) { }  
  
  saveEvent(event){      
    return this.http.post(`${environment.apiUrl}/SaveEvent/`, event)  
            .pipe(map((response: Response) =>response.json()))              
  }  
  
  GetEvent(){       
    return this.http.get(`${environment.apiUrl}/getEvent/`)  
            .pipe(map((response: Response) => response.json()))              
  }  
 deleteEvent(id){   
    return this.http.post(`${environment.apiUrl}/deleteEvent/`,{'id': id})  
            .pipe(map((response: Response) =>response.json()))               
  }  
  
}  