/*
  Filename: entries.service.ts
  Author: Cole Vohs
  Description: Service to keep track of an array 
    of entries and get default entries
*/

import { Injectable } from '@angular/core';
import { Entry } from './entry';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {

  public entries: Entry[];  
  private messages = this.http.get("http://localhost:4201/");

  constructor(private http: HttpClient) {         
    this.messages.subscribe((data: Entry[]) => {
      console.log(data);
      this.entries = data;
    });
  }

}
