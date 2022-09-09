import { LoginComponent } from './login/login.component';
 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:"accountinfo",
    component:RegisterComponent
  },
  {
    path:"accountinfo/login",
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountinfoRoutingModule { }
