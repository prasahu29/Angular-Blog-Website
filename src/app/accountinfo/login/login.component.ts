import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AccountinfoserviceService } from '../accountinfoservice.service';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form:any
  constructor(private accountinfo:AccountinfoserviceService ,private route:Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),


     });

  }

login(){

// console.log(this.form.value)   data aa rha hai ki nahi
  if (this.form.valid) {
    this.accountinfo.login(this.form.value).subscribe(
      res => {
        //console.log(object)
        console.log(res);

        localStorage.setItem("Token",res.Token);  //3

        this.form.reset();
                  //1
        //this.route.navigate(["admin"]);
        var t =localStorage.getItem("Token")
        console.log(t)
        if (t=="undefined"){
          this.route.navigate(["/"]);
        }else {

          this.route.navigate(["admin"]);

        }    //2
      },
      err => {
        console.log(err);
      }
    );
  }



}



}
