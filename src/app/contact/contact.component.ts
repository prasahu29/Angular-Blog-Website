import { Subscriber } from 'rxjs';
import { BlogService } from './../service/blog.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
id:any
result:any;
viewdata1:any
viewdata2:any
form:any
value:any
  constructor(private activate:ActivatedRoute, private BlogService:BlogService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      city: new FormControl(''),
      message: new FormControl('')

     });

  }
  contactform(){
    console.log(this.form.value)
    // this.form.contactinsert(this.form.value).subscribe(()=>{

    // })
this.BlogService.contactinsert(this.form.value).subscribe((data:any)=>{
  console.log(data)
}
)
    this.form.reset({});

  }



}
