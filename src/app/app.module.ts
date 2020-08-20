import { NgModule, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { JournalFormComponent } from './journal-form/journal-form.component';
import { InputComponent } from './input/input.component';

@NgModule({
  imports: [    
  BrowserModule,
    ReactiveFormsModule,    
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,    
    InputComponent,    
    JournalFormComponent,
    TopBarComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ AppComponent ]
})
export class AppModule { }
