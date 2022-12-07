import { BookService } from './../Services/book-service.service';
 import { PostService } from './../Services/post.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileResolver } from './resolver/profile.resolver';
import { UserService } from './../Services/user-service.service';
 import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModuleRoutingModule } from './dashboard-module-routing.module';
 import { DashHomeComponent } from './dash-home/dash-home.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngMusicPlayerModule } from 'ang-music-player';
import { AuthorizeInterceptor } from '../Services/authorize.interceptor';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { CommunicateComponent } from './communicate/communicate.component';
import { AuthorResolverResolver } from './resolver/author-resolver.resolver';
import { ProfileComponent } from './profile/profile.component';
import { MatCardModule } from '@angular/material/card';
import { MyPostsResolver } from './resolver/MyPosts.resolver';
import {MatIconModule} from '@angular/material/icon';
import { MybooksComponent } from './mybooks/mybooks.component';
import { PdfViewerComponent, PdfViewerModule } from 'ng2-pdf-viewer';
import { Materials } from '../shared/materials';

@NgModule({
  declarations: [
    DashBoardComponent,
    DashHomeComponent,
    CommunicateComponent,
    ProfileComponent,
    MybooksComponent,


  ],
  imports: [
    CommonModule,
    Materials,
    PdfViewerModule,
    DashboardModuleRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ClipboardModule,
    MatSnackBarModule,
    FontAwesomeModule,
    MatProgressBarModule,
    AngMusicPlayerModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [AuthorResolverResolver,ProfileResolver,MyPostsResolver,PostService,BookService,
    UserService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthorizeInterceptor,
      multi:true
    }
  ]
})
export class DashboardModuleModule { }
