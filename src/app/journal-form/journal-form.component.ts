import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry';
import { EntriesService } from '../entries.service';

@Component({
  selector: 'app-journal-form',
  templateUrl: './journal-form.component.html',
  styleUrls: ['./journal-form.component.css'],
  providers: [ EntriesService ]
})
export class JournalFormComponent implements OnInit {    

  constructor(private entriesService: EntriesService) { 
    this.entriesService = entriesService;
  }

  ngOnInit(): void {   
  
  }

  updateEntry(event) {    
    this.entriesService.entries[event.index].text = event.entry;
  }

}
