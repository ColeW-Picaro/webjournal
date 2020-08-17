/*
  Filename: entries.service.ts
  Author: Cole Vohs
  Description: Service to keep track of an array 
    of entries and get default entries
*/

import { Injectable } from '@angular/core';
import { Entry } from './entry';

var entries : Entry[] = [
  {
    num: 1,
    name: "What good shall I do this day?",
    description: "What good will you do today?",
    text: ""
  } as Entry,
  {
    num: 2,
    name: "What good have I done this day?",
    description: "What good have you done today?",
    text: ""
  } as Entry,
  {
    num: 3,
    name: "What's positively affecting my mood?",
    description: "What's positively affecting your mood?",
    text: ""
  } as Entry,
  {
    num: 4,
    name: "What's negatively affecting my mood?",
    description: "What's negatively affecting your mood?",
    text: ""
  } as Entry,
]

@Injectable({
  providedIn: 'root'
})
export class EntriesService {

  public entries: Entry[];    

  constructor() {     
    this.entries = entries;
  }

}
