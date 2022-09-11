import { DashHomeComponent } from './dash-home/dash-home.component';
 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AuthorResolverResolver } from './resolver/author-resolver.resolver';

const routes: Routes = [
  {path:'',component:DashBoardComponent,pathMatch:'full'
  ,children:[
    {path:'',component:DashHomeComponent,
  resolve:{resolve:AuthorResolverResolver}
  }
  ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardModuleRoutingModule { }
