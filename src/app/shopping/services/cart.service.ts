import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  

  constructor(private http: HttpClient) { }

  getbyCouponCode(couponcode:any):any{
    console.log(couponcode.couponCode);
    return this.http.get(`https://localhost:44346/api/Discount/?p_couponCode=${couponcode.couponCode}`)
     .pipe(map((res:any)=>{
       return res;
     }))
  }

  updateUserAddress(loggedInUser:any):any{    
    return this.http.put(`https://localhost:44346/api/Users`,loggedInUser)
     .pipe(map((res:any)=>{
       console.log('cartservices.ts');
       console.log(res);
       return res;
     }))
  }

  addOrder(orderObj:any):any{
    return this.http.post(`https://localhost:44346/api/Order`,orderObj)
     .pipe(map((res:any)=>{
       return res;
     }))
  }

  getUserByUserId(userId:string):any{
    return this.http.get(`https://localhost:44346/api/Users/?p_userId=${userId}`)
    .pipe(map((res:any)=>{
      console.log('user');
      console.log(res);
      
      return res;
    }))
  }

  getCartbyUserId(userId: string | null): any{ 
    let cartUrl = `https://localhost:44346/api/Cart?userId=${userId}`;
    return this.http.get(cartUrl)
      .pipe(map( (res: any) => {
        console.log(res);
        return res;
      }));
  }

  getWishListbyUserId(userId: string | null): any{ 
    let wishList = `https://localhost:44346/api/WishList?p_userId=${userId}`;
    return this.http.get(wishList)
      .pipe(map( (res: any) => {
        console.log(res);
        return res;
      }));
  }

  updateBookQty(cartitem:any)
  {
    let cartUrl = `https://localhost:44346/api/Cart?id=${cartitem.cartId}`;
    return this.http.put(cartUrl,cartitem)
      .pipe(map( (res: any) => {
        console.log(res);
        return res;
      }));
  }
deleteBookfromCart(cartId:any)
{
  let cartUrl = `https://localhost:44346/api/Cart?id=${cartId}`;
  return this.http.delete(cartUrl)
    .pipe(map( (res: any) => {
      console.log(res);
      return res;
    }));
}

deleteBookfromWishlist(wishId:any)
{
  let wishUrl = `https://localhost:44346/api/Wishlist?p_wishId=${wishId}`;
  return this.http.delete(wishUrl)
    .pipe(map( (res: any) => {
      console.log(res);
      return res;
    }));
  }

  getOrderbyUserId(userId:any)
  {
    let orderUrl = `https://localhost:44346/api/Order?userId=${userId}`;
    return this.http.get(orderUrl)
    .pipe(map( (res: any) => {
      console.log(res);
      return res;
    }));
  }

  getOrders()
  {
    let orderUrl = 'https://localhost:44346/api/Order';
    return this.http.get(orderUrl)
    .pipe(map( (res: any) => {
      console.log(res);
      return res;
    }));
  }

  getPurchaseByOrderid(orderId:any)
  {
    let purchaseUrl = `https://localhost:44346/api/Purchases?p_orderId=${orderId}`;
    return this.http.get(purchaseUrl)
    .pipe(map( (res: any) => {
      console.log(res);
      return res;
    }));
  }

  getBookById(bookId:any){ 

    console.log(bookId);
    let bookIdURL = `https://localhost:44346/api/Books?p_bookID=${bookId}`;
    return this.http.get(bookIdURL)
      .pipe(map( (res: any) => {
        console.log(res);
        return res;
      }));
  }
  getDiscounts()
  {
    let discountUrl = `https://localhost:44346/api/Discount`;
    return this.http.get(discountUrl)
    .pipe(map( (res: any) => {
      console.log(res);
      return res;
    }));
  }

  
}
