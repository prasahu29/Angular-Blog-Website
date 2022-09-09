import { AccountinfoserviceService } from './../accountinfoservice.service';
import { Injectable } from '@angular/core';
import {  CanActivate,Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {
  constructor(private accountinfo:AccountinfoserviceService,private router:Router){}
  canActivate(){
    console.log(this.accountinfo.loggedin())
    if (this.accountinfo.loggedin()){
      return true;
    }else {
      this.router.navigate(["/"]);
      return false;
    }
  }

}
