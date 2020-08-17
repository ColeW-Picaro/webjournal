import { Injectable } from '@angular/core';
import { Entry } from './entry';
import { Subject } from 'rxjs';

var entries : Entry[] = [
  {
    num: 1,
    name: "What good shall I do this day?",
    description: "What good will you do today?",
    text: " "
  } as Entry,
  {
    num: 2,
    name: "What good have I done this day?",
    description: "What good have you done today?",
    text: " "
  } as Entry,
]

@Injectable({
  providedIn: 'root'
})
export class EntriesService {

  public entries: Entry[];

  public entrySource = new Subject<[number, string]>();

  entryChanged$ = this.entrySource.asObservable();  

  public index = 0;

  constructor() {     
    this.entries = entries;
  }

  changeEntry(entry: [number, string]) {
    console.log(entry);
    this.entrySource.next(entry);    
  }

  updateIndex() {
    ++this.index;
  }

}
