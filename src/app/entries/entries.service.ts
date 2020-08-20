/*
  Filename: entries.service.ts
  Author: Cole Vohs
  Description: Service to keep track of an array 
    of entries and get default entries
*/

import { Injectable } from '@angular/core';
import { Entry } from './entry';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntriesService implements OnInit {

  //public entries: Entry[];  
  private entriesURL = "http://localhost:4201/entries"; 
  public entriesMessage = new Subject<Entry[]>();
  

  constructor(private http: HttpClient) {                 
  }

  ngOnInit() {    
  }

  getEntriesFromServer() : Observable<any> {
    return this.http.get(this.entriesURL);
  }

  exportEntries () {
    // let postMessage = this.http.post("http://localhost:4201/export", this.entries);    
  }

}
