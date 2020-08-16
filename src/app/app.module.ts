import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { InputComponent } from './input.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: EntryListComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    EntryListComponent,
    InputComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [AppComponent]
})
export class AppModule { }
