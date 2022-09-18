import { ProfileResolver } from './resolver/profile.resolver';
import { DashHomeComponent } from './dash-home/dash-home.component';
 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AuthorResolverResolver } from './resolver/author-resolver.resolver';
import { AuthorizeToGo } from '../Services/autorizetogo';
import { ProfileComponent } from './profile/profile.component';
import { MyPostsResolver } from './resolver/MyPosts.resolver';

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
    },

    }
  ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardModuleRoutingModule { }
