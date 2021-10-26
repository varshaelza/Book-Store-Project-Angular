import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor( private http:HttpClient) { }
  getBooks()
  {
    return this.http.get('https://localhost:44346/Api/Books')
    .pipe( map((res:any)=>{
      console.log(res);
      return res;
      }))
  }

  getCategories()
  {
    return this.http.get('https://localhost:44346/Api/Category')
    .pipe( map((res:any)=>{
      console.log(res);
      return res;
      }))
  }

  getDiscounts()
  {
    return this.http.get('https://localhost:44346/Api/Discount')
    .pipe( map((res:any)=>{
      console.log(res);
      return res;
      }))
  }


  getUsers()
  {
    return this.http.get('https://localhost:44346/Api/Users')
    .pipe( map((res:any)=>{
      console.log(res);
      return res;
      }))
  }

  editUser(user:any)
  {
    return this.http.put('https://localhost:44346/Api/Users',user)
    .pipe( map((res:any)=>{
      console.log(res);
      return res;
      }))
  }
}
