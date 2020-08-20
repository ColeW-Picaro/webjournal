/*
  Filename: input.component.ts
  Author: Cole Vohs
  Description: A component to get input from a textarea
*/

import { Component, Output, EventEmitter, Input, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
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
    this.entry.text = this.text;
    this.updateEntry.emit({entry: this.text, index: this.index});    
  }

}
