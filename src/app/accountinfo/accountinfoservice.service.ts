import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountinfoserviceService {
url='https://fast-lowlands-50888.herokuapp.com/api/pn/'
  constructor(private http:HttpClient, private router:Router) { }

registrationinsert(insert:any){
  console.log(insert)
  return this.http.post<any>(this.url+'/user/insert',insert)
}

login(data:any){  //user login
  console.log(data)
  return this.http.post<any>(this.url+'login',data)
}


logout(){
  localStorage.removeItem("Token");

  this.router.navigate(["/"])
}


loggedin(){      //login hota to dikhaega nhi hoga to nhi dikhaega
  return !!localStorage.getItem("Token");
} //get item means token aa rha hai


}
