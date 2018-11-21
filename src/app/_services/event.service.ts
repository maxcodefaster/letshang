import { Injectable } from '@angular/core';   
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
   
import { Observable } from 'rxjs';  
import { map, filter, scan } from 'rxjs/operators';
  
@Injectable()  
export class EventService {  
  
  constructor(private http: Http) { }  
  
  saveEvent(event){      
    return this.http.post('http://localhost:8080/api/SaveEvent/', event)  
            .pipe(map((response: Response) =>response.json()))              
  }  
  
  GetEvent(){       
    return this.http.get('http://localhost:8080/api/getEvent/')  
            .pipe(map((response: Response) => response.json()))              
  }  
 deleteEvent(id){   
    return this.http.post('http://localhost:8080/api/deleteEvent/',{'id': id})  
            .pipe(map((response: Response) =>response.json()))               
  }  
  
}  