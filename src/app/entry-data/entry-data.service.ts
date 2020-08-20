import { Injectable } from '@angular/core';
import { Entry } from '../entries/entry';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntryDataService {

  public entries: Entry[];
  public entriesMessage = new Subject<Entry[]>();

  constructor() { 

  }

  getCurrentEntries() : Observable<any> {
    return this.entriesMessage.asObservable();
  }
  
  updateEntries(entries: Entry[]) {
    this.entriesMessage.next(entries);
  }
}
