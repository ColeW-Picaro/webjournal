import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <textarea #box
      (keyup.enter)="update(box.value)"
      (blur)="update(box.value)">
    </textarea>
    <p>{{value}}</p>
    `
})
export class InputComponent {
  value = '';
  update(value: string) { this.value = value; }
}
