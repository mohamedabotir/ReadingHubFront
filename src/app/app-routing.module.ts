import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:'Dashboard',loadChildren:()=>import('./dashboard-module/dashboard-module.module').then(e=>e.DashboardModuleModule)},
{path:'',component:LandingComponent,children:[
  {path:'',component:MainComponent,pathMatch:'full'},
  {path:'login',component:LoginComponent,pathMatch:'full'}
]
},
{path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
