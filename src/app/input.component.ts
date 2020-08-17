import { Component, Output, EventEmitter } from '@angular/core';
import { EntriesService } from './entries.service';

@Component({
  selector: 'app-input',
  template: `
    <textarea #box
      (keyup.enter)="update(id, box.value)"
      (blur)="update(id, box.value)">
    </textarea>
    `
})
export class InputComponent {  
  private value: string = '';

  private entriesService: EntriesService;
  

  constructor(entriesService: EntriesService) {
    this.entriesService = entriesService;    
  }

  update(num: number, value: string) {     
    this.value = value;
    this.entriesService.changeEntry([num, this.value]);  
  }

  getValue () {
    return this.value;
  }  
}
