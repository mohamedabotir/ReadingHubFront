import { LandingComponent } from './landing/landing.component';
 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:'Dashboard',loadChildren:()=>import('./dashboard-module/dashboard-module.module').then(e=>e.DashboardModuleModule)},
{path:'',component:LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
