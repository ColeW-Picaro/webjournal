import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../entries/entries.service';
import { Entry } from '../entries/entry';
import { EntryDataService } from '../entry-data/entry-data.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  providers: [ EntriesService ]
})
export class TopBarComponent implements OnInit {

  public title;
  private entries : Entry[];
  
  constructor(
    public app: AppComponent,     
    private entryDataService: EntryDataService) { 
    this.title = app.title;      
  }

  ngOnInit() {     
    this.entryDataService.getCurrentEntries().subscribe(
      (entries) => {
        this.entries = entries        
      });
  }

  exportClick() {    
    console.log(this.entries);
  }

}
