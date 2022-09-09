import { Router, ActivatedRoute } from '@angular/router';
import { AdminserviceService } from './../adminservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displayblog',
  templateUrl: './displayblog.component.html',
  styleUrls: ['./displayblog.component.css']
})
export class DisplayblogComponent implements OnInit {

  constructor(private admin:AdminserviceService, private router:Router,private activate:ActivatedRoute) { }
data:any
id:any
resdata:any;
newsdata:any;

ngOnInit(): void {

  this.id=this.activate.snapshot.paramMap.get('id')
this.admin.displaydata()
    .subscribe(data=>{console.log(data);
      this.resdata=data
      this.newsdata=this.resdata.getall
      console.log(this.newsdata);

    })
  }


blogdelete(id:any){
  console.log(id)
    this.admin.deleteblog(id).subscribe((result)=>{
    console.log(result)
    this.router.navigate(['/admin/displayblog']);
    this.ngOnInit()
  });
 }


}
