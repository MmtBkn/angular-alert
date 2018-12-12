import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatDialogModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogContentComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatDialogModule, MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogContentComponent]
})
export class AppModule { }
