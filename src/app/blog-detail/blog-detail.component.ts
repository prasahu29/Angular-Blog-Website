import { BlogService } from './../service/blog.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
id:any;
result:any;
viewdata1:any
viewdata2:any
  constructor(private activate:ActivatedRoute,private BlogService:BlogService) { }

  ngOnInit(): void {
    this.id=this.activate.snapshot.paramMap.get('id')

    this.BlogService.viewdata2(this.id).subscribe(result=>{
      console.log(result)
      this.viewdata1=result
      this.viewdata2=this.viewdata1.result

    })

  }

}
