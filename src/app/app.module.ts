 import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field'
import{MatProgressBarModule} from '@angular/material/progress-bar'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { ClipboardModule } from '@angular/cdk/clipboard';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from "@angular/material/button"
import {MatInputModule} from "@angular/material/input"
import {FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingComponent } from './landing/landing.component';
import { AngMusicPlayerModule } from  'ang-music-player';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthorizeInterceptor } from './Services/authorize.interceptor';
import { LoginComponent } from './login/login.component';

 @NgModule({
  declarations: [
    AppComponent,

    LandingComponent,
     LoginComponent,

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
    AngMusicPlayerModule,
    NgbModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthorizeInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
