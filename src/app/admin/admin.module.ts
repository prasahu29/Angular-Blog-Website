import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddblogComponent } from './addblog/addblog.component';
import { DisplayblogComponent } from './displayblog/displayblog.component';
import { ViewblogComponent } from './viewblog/viewblog.component';
import { EditblogComponent } from './editblog/editblog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactblogComponent } from './contactblog/contactblog.component';


@NgModule({
  declarations: [
    AddblogComponent,
    DisplayblogComponent,
    ViewblogComponent,
    EditblogComponent,
    DashboardComponent,
    ContactblogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    AdminRoutingModule,
  ]
})
export class AdminModule { }
