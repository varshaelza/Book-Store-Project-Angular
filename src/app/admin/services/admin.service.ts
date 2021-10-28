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
  updateBookbyPos(bookId:any,bookPosition:any)
  {
    return this.http.put(`https://localhost:44346/Api/Books?p_bookId=${bookId}&p_bookpos=${bookPosition}`,bookId)
    .pipe( map((res:any)=>{
      console.log(res);
      return res;
      }))
  }

  deleteBook(bookId:any)
  {
    return this.http.delete(`https://localhost:44346/Api/Books?p_bookID=${bookId}`)
    .pipe( map((res:any)=>{
      // console.log(res.indexOf(cat));
      
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

  updateCategorybyPos(catId:any,catPosition:any)
  {
    return this.http.put(`https://localhost:44346/Api/Category?id=${catId}&pos=${catPosition}`,catId)
    .pipe( map((res:any)=>{
      console.log(res);
      return res;
      }))
  }

  deleteCategory(catId:any)
  {
    return this.http.delete(`https://localhost:44346/Api/Category?id=${catId}`)
    .pipe( map((res:any)=>{
      // console.log(res.indexOf(cat));
      
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

  deleteDiscount(couponId:any)
  {
    return this.http.delete(`https://localhost:44346/Api/Discount?p_couponId=${couponId}`)
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
