import { InputComponent } from './input.component';
import { NgModule, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { JournalFormComponent } from './journal-form/journal-form.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,    
    FormsModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    InputComponent,
    JournalFormComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ AppComponent ]
})
export class AppModule { }
