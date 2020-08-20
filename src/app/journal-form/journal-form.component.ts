import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../entries/entries.service';
import { Entry } from '../entries/entry';
import { EntryDataService } from '../entry-data/entry-data.service';

@Component({
  selector: 'app-journal-form',
  templateUrl: './journal-form.component.html',
  styleUrls: ['./journal-form.component.css'],
  providers: [ EntriesService ]
})
export class JournalFormComponent implements OnInit {    

  private entries: Entry[];

  constructor(
    private entriesService: EntriesService,
    private entryDataService: EntryDataService) {

  }

  ngOnInit(): void {    
    this.entriesService.getEntriesFromServer().subscribe(
      (entries) => this.entries = entries
    );
  }

  // Update the entries here and ship it off to the service
  updateEntry(event) { 
    this.entries[event.index].text = event.entry;
    this.entryDataService.updateEntries(this.entries);    
  }

}
