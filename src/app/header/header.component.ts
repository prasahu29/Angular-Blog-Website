import { AccountinfoserviceService } from './../accountinfo/accountinfoservice.service';
import { AccountinfoModule } from './../accountinfo/accountinfo.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public accountinfo:AccountinfoserviceService) { }

  ngOnInit(): void {
  }

}
