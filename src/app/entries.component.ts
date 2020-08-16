import { EntryListComponent } from './entry-list/entry-list.component';

interface Entry {
  name: string;
  description: string;
  text: string;
}

let defaultEntries = [
  {
    name: "What Good Shall I do this Day?",
    description: "What good will you to today?",
    text: " ",
  } as Entry,
  {
    name: "What Good Have I done this Day?",
    description: "What good have you done today?",
    text: " ",
  } as Entry
]


export class EntriesComponent {

  private entries;

  constructor() {    
    this.entries = [];
    for (let i = 0; i < defaultEntries.length; ++i) {
      console.log(defaultEntries[i]);
      this.entries.push(defaultEntries[i]);
    }    
  }

  getEntries () {
    return this.entries;
  }

}
