import { EntriesComponent } from './../entries.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers: [EntriesComponent]
})
export class EntryListComponent implements OnInit {
  
  public entries: EntriesComponent;

  constructor(entries: EntriesComponent) {     
    this.entries = entries;
  }

  ngOnInit() {
  }

}