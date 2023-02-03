import { BookComponent } from './book/book.component';
import { myBooksResolver } from './resolver/myBooks.resolver';
 import { ProfileResolver } from './resolver/profile.resolver';
import { DashHomeComponent } from './dash-home/dash-home.component';
 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AuthorResolverResolver } from './resolver/author-resolver.resolver';
import { AuthorizeToGo } from '../Services/autorizetogo';
import { ProfileComponent } from './profile/profile.component';
import { MyPostsResolver } from './resolver/MyPosts.resolver';
import { MybooksComponent } from './mybooks/mybooks.component';
import { ExploreComponent } from './explore/explore.component';
import { allBooksResolver } from './resolver/allBooks.resolver';

const routes: Routes = [
  {path:'',canActivate:[AuthorizeToGo],
  component:DashBoardComponent,
   resolve:{resolve:ProfileResolver}
  ,children:[
    {path:"",component:DashHomeComponent,pathMatch:'full',
     resolve:{resolve:AuthorResolverResolver},
    },
    {
     path:"profile",component:ProfileComponent,
     pathMatch:'full',
     resolve:{
      resolve:ProfileResolver,
      myposts:MyPostsResolver
    }
    },{
      path:'myBooks',component:MybooksComponent,resolve:{
        resolve:myBooksResolver
      }
    },
    {path:'explore',component:ExploreComponent,resolve:{
      resolve:allBooksResolver

    }
  },
  {path:'book/:id',component:BookComponent}
  ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardModuleRoutingModule { }
