import { ViewblogComponent } from './viewblog/viewblog.component';
import { EditblogComponent } from './editblog/editblog.component';
import { DisplayblogComponent } from './displayblog/displayblog.component';
import { AddblogComponent } from './addblog/addblog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../accountinfo/gurd/auth.guard';

const routes: Routes = [
  {
    path:"admin",
    component:DashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"admin/addblog",
    component:AddblogComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"admin/displayblog",
    component:DisplayblogComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"admin/editblog/:id",
    component:EditblogComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"admin/viewblog/:id",
    component:ViewblogComponent,
    canActivate:[AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
