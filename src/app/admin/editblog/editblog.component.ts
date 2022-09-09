import { Subscriber } from 'rxjs';
import { AdminserviceService } from './../adminservice.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent implements OnInit {
form:any
id:any

b1:any
b2:any

  constructor(private admin:AdminserviceService,private router:Router,private activate:ActivatedRoute) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      title: new FormControl(''),
      body: new FormControl(''),
      description: new FormControl(''),

     });


    this.id=this.activate.snapshot.paramMap.get('id')


    this.admin.viewblog(this.id).subscribe((result:any)=>{
      this.b1=result;
      this.b2=this.b1.result

      this.form.patchValue({

        title:this.b2.title,
        body:this.b2.body,
        description:this.b2.description
      })
    })
  }


edit(){
  console.log(this.form.value)
  this.admin.updateblog(this.form.value,this.id).subscribe(
    (result:any)=>{
      console.log(result)
      this.router.navigate(['/admin/displayblog'])
    }
  )
}


}
