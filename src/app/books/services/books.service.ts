import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BooksService {
currentUser: any;
cartObj: any;
wishObj: any;
  constructor(private http: HttpClient) { }

  isNumber(value: string | number): boolean
  {
    return ((value != null) &&
            (value !== '') &&
            !isNaN(Number(value.toString())));
  }

  getAllBooks(){
    let bookURL = `https://localhost:44346/api/Books`;
    return this.http.get(bookURL)
      .pipe(map( (res: any) => {
        console.log(res);
        return res;
      }));
  }
  getBooksByCatId(catId:string|null):any{
    console.log(catId);
    let catIdURL = "";
    if(catId!=null){
      if(this.isNumber(catId)){
        catIdURL = `https://localhost:44346/api/Books?p_catID=${catId}`;
      }
      else{
        catIdURL = `https://localhost:44346/api/Books?p_value=${catId}`;
      }
    }
    
    //catIdURL = `https://localhost:44346/api/Books?p_catID=${catId}`;
    return this.http.get(catIdURL)
      .pipe(map( (res: any) => {
        console.log(res);
        return res;
      }));
  }

  getBookById(bookId: string | null): any{ 

    console.log(bookId);
    let bookIdURL = `https://localhost:44346/api/Books?p_bookID=${bookId}`;
    return this.http.get(bookIdURL)
      .pipe(map( (res: any) => {
        console.log(res);
        return res;
      }));
  }

  addToCart(book:any){
    this.currentUser = JSON.parse(localStorage.getItem('authToken') || '{}');
    var id: number = +this.currentUser;

    this.cartObj = {"userId": this.currentUser, "bookId":book.bookId,"bookQty":1};

    return this.http.post('https://localhost:44346/api/Cart',this.cartObj)
    .pipe(map((res: any)=>{
      console.log(res);
      return res;
    }));
    
  }

  addToWishList(book:any){
    this.currentUser = JSON.parse(localStorage.getItem('authToken') || '{}');
    var id: number = +this.currentUser;

    this.wishObj = {"userId": id, "bookId":book.bookId};

    return this.http.post('https://localhost:44346/api/WishList',this.wishObj)
    .pipe(map((res: any)=>{
      console.log(res);
      return res;
    }));
    
  }
  
}
