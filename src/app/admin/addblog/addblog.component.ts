
import { AdminserviceService } from './../adminservice.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {
  form: any

  constructor(private adminservice: AdminserviceService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(''),
      body: new FormControl(''),
      description: new FormControl(''),
    });
  }

  addblog() {
    console.log(this.form.value)
    this.adminservice.bloginsert(this.form.value).subscribe((blogall) => {

    })
    this.form.reset({})
  }
}
