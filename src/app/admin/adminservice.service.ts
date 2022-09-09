import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  url='https://fast-lowlands-50888.herokuapp.com/api/pn/'

  constructor(private http:HttpClient) { }

  bloginsert(blogall:any){
    console.log(blogall);
    return this.http.post(this.url+'bloginsert',blogall)
  }
displaydata(){
  return this.http.get(this.url+'getall')
   }

viewblog(id:any){
  console.log(id)
  return this.http.get(this.url+'blogview/'+id)
}

updateblog(data:any,id:any){
  return this.http.put(this.url+"blogupdate/"+id,data);
}

deleteblog(id:any){
  return this.http.get(this.url+"deleteblog/"+id)
}


}
