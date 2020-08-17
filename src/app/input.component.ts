import { Component, Output, EventEmitter, Input, OnInit, Inject, Injectable } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <textarea [(ngModel)]="text"      
      (keyup.enter)="update()"
      (blur)="update()">
    </textarea>
    `
})

export class InputComponent implements OnInit {
  /*
    text: the current text of the textarea
    entry: the Entry this component updates
    index: the Index of the array
    updateEntry: Event for updating the entry
  */
  text: string; 
  @Input() entry: any;
  @Input() index: number;
  @Output() updateEntry: EventEmitter<any> = new EventEmitter();  

  constructor() {    
  }

  ngOnInit() {    
    this.text = this.entry.text;
  }

  update() {
    console.log(this.text);
    this.entry.text = this.text;
    this.updateEntry.emit({entry: this.text, index: this.index});
  }

  getValue () {
    return this.entry.text;
  }  
}
