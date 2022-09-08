 import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field'
import{MatProgressBarModule} from '@angular/material/progress-bar'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommunicateComponent } from './communicate/communicate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { ClipboardModule } from '@angular/cdk/clipboard';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from "@angular/material/button"
import {MatInputModule} from "@angular/material/input"
import {FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { LandingComponent } from './landing/landing.component';
import { AngMusicPlayerModule } from  'ang-music-player';

 @NgModule({
  declarations: [
    AppComponent,
    CommunicateComponent,
    DashBoardComponent,
    LandingComponent,

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
    MatSnackBarModule,
    FontAwesomeModule,
    MatProgressBarModule,
    AngMusicPlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
