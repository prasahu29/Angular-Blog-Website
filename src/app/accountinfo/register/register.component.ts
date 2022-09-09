import { ActivatedRoute } from '@angular/router';
import { AccountinfoserviceService } from './../accountinfoservice.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
form:any
id:any
viewdata2:any
viewdata1:any
result:any
  constructor(private activate:ActivatedRoute,private accountinfo:AccountinfoserviceService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name:new FormControl,
      email: new FormControl(''),
      password: new FormControl(''),
      password_confirmation:new FormControl('')


     });



  }
registration(){ //html bala
console.log(this.form.value)
this.accountinfo.registrationinsert(this.form.value).subscribe((data:any)=>{
console.log(data) //registration insert form accountinfoservice bala
})

this.form.reset({});
}

}
