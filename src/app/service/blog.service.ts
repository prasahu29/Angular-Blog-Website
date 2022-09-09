import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TitleStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
url='https://fast-lowlands-50888.herokuapp.com/api/pn/'
  constructor(private http:HttpClient) { }
  getdata2(){ //diaplay
    return this.http.get(this.url+'getall')
   }

   viewdata2(id:any){  //read more view  blog
    return this.http.get(this.url+'blogview/'+id)
   }

getcontact(id:any){
  return this.http.get(this.url+'contact/'+id)
}

contactinsert(getcontact:any){
  console.log(getcontact);
  return this.http.post(this.url+'contactinsert',getcontact)
}




}
