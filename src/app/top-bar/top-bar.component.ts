import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  public title;

  constructor(public app: AppComponent) { 
    this.title = app.title;
  
  }

  ngOnInit() {
  }

}
