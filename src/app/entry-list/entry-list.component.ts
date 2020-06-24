import { Component, OnInit } from '@angular/core';

import { entries} from "../entries";

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  entries = entries;

  constructor() { }

  ngOnInit() {
  }

  save(entryName, entryText) {
    window.alert(entryName + " " + entryText);
  }

}