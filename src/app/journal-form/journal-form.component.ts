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

  public entriesService: EntriesService;  

  private entry : [number, string];

  constructor(entries: EntriesService) { 
    this.entriesService = entries;
  }

  ngOnInit(): void {    
    this.entriesService.entryChanged$.subscribe(
      entry => {
        this.entry = entry;
        let num = this.entry[0];
        let text = this.entry[1];
        this.entriesService.entries[num].text = text;
      }
    );
  }

}
