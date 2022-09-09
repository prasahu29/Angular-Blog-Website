import { AdminserviceService } from './../adminservice.service';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-viewblog',
  templateUrl: './viewblog.component.html',
  styleUrls: ['./viewblog.component.css']
})
export class ViewblogComponent implements OnInit {
id:any
adminn:any
admin1:any
  constructor(private admin:AdminserviceService,private router:Router,private activated:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.activated.snapshot.paramMap.get('id')

this.admin.viewblog(this.id).subscribe(result=>{
  this.admin1=result
  this.adminn=this.admin1.result
})

    }
    

  }


