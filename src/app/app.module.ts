 import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommunicateComponent } from './communicate/communicate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { ClipboardModule } from '@angular/cdk/clipboard';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from "@angular/material/button"
import {MatInputModule} from "@angular/material/input"


 @NgModule({
  declarations: [
    AppComponent,
    CommunicateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ClipboardModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
