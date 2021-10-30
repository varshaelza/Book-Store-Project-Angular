import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url: string = 'https://api.imgur.com/3/thebookspot';
  imageLink:any;
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

  updateBook(book:any)
  {
    return this.http.put('https://localhost:44346/Api/Books',book)
    .pipe( map((res:any)=>{
      console.log(res);
      return res;
      }))
  }
  addBook(book:any)
  {
    return this.http.post('https://localhost:44346/Api/Books',book)
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
  addCategory(cat:any)
  {
    return this.http.post('https://localhost:44346/Api/Category',cat)
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
  updateCategory(cat:any)
  {
    return this.http.put(`https://localhost:44346/Api/Category?id=${cat.categoryId}`,cat)
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
  addDiscount(formdata:any)
  {
    return this.http.post('https://localhost:44346/Api/Discount',formdata)
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

updateDiscount(formdata:any)
{
  return this.http.put('https://localhost:44346/Api/Discount',formdata)
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

  async uploadImage(imageFile:any):Promise<any>{
    let formData = new FormData();
    formData.append('image', imageFile, imageFile.name);
 
    let header = new HttpHeaders({
      "authorization": 'Client-ID '+'59f5d52a661ee19'
    });
   
    const imageData:any = await this.http.post(this.url, formData, {headers:header}).toPromise();
    this.imageLink = imageData['data'].link;
 
    console.log(this.imageLink)
 
  }
}
