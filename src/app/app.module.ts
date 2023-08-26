import { LoaderInterceptor } from './Services/Loader/LoaderInterceptor';
import { LoaderComponent } from './Services/Loader/LoaderComponent';
import { UserService } from 'src/app/Services/user-service.service';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from "@angular/material/button"
import {MatInputModule} from "@angular/material/input"
import {FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingComponent } from './landing/landing.component';
import { AngMusicPlayerModule } from  'ang-music-player';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthorizeInterceptor } from './Services/authorize.interceptor';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AuthorizeToGo } from './Services/autorizetogo';
import {MatCardModule} from '@angular/material/card';
import { ExploreComponent } from './dashboard-module/explore/explore.component';
import { BookDisplayComponent } from './shared/book-display/book-display.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { Materials } from './shared/materials';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { ToasterInterceptor } from './Services/toaster.interceptor';

  @NgModule({
  declarations: [
    AppComponent,

    LandingComponent,
     LoginComponent,
     MainComponent,
     ExploreComponent,
     BookDisplayComponent,
      LoaderComponent

  ],
  imports: [
    PdfViewerModule,
    Materials,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ClipboardModule,
    MatSnackBarModule,
    FontAwesomeModule,
    MatProgressBarModule,
    NgbModule,
    HttpClientModule,
    MatCardModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
  ],
  providers: [
    UserService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthorizeInterceptor,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:LoaderInterceptor,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:ToasterInterceptor,
      multi:true
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
