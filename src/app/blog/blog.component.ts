import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
resdata:any;
newsdata:any;
  constructor(private blogservice:BlogService) { }

  ngOnInit(): void {
    this.blogservice.getdata2()
    .subscribe(data=>{console.log(data);
      this.resdata=data
      this.newsdata=this.resdata.getall
      console.log(this.newsdata);

    })
  }
  }


