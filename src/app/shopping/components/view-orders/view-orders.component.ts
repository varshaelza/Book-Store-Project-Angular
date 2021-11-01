
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/services/admin.service';
import { BooksService } from 'src/app/books/services/books.service';
import { CartDataService } from 'src/app/shared/services/cart-data.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.scss']
})

export class ViewOrdersComponent implements OnInit {
  allorders:any
  currentUser: any;
  orderList:any
  purchaseList:any
  bookdetails:any
  purchasesPresent=true;
  orderCount:any
 
  discountdetail:any
  isadmin:any
  username:any
 
  
  constructor(private cartService: CartService, private bookService: BooksService,private adminService:AdminService, private cartdataService:CartDataService){ }

  ngOnInit(): void {
    this.allorders=[]
    this.isadmin=false;
    this.currentUser = JSON.parse(localStorage.getItem('authToken') || '{}');
    this.adminService.getUsers()
    .subscribe((res: any) => {
      console.log(res);
      this.isadmin=res.find((i:any)=>i.userID===this.currentUser).isAdmin
      console.log(res.find((i:any)=>i.userID===this.currentUser))
      console.log("admin")
      console.log(this.isadmin)
      if(this.isadmin==true)
    {
      console.log("entered")
      this.getOrders()
    }
    else{
    this.getOrdersbyUserid()
    }
  
    })
    
    
  }
  getOrders()
  {
    this.orderList=[]
    this.purchaseList=[]
    this.cartService.getOrders()
      .subscribe((res: any) => {
        console.log("orders")
        console.log(res);
        this.orderList = res;
        console.log(this.orderList.length)
        console.log("out")
        console.log(this.orderList)
        if(this.orderList.length==0){
          this.purchasesPresent=false;
        }
        else{
          console.log(this.orderList)
          this.purchasesPresent=true;
          this.orderCount = this.orderList.length;
          
          }});}

  
  getOrdersbyUserid()
  {
    
    this.orderList=[]
    this.purchaseList=[]
    this.cartService.getOrderbyUserId(this.currentUser)
      .subscribe((res: any) => {
        console.log("orders")
        console.log(res);
        this.orderList = res;
        console.log(this.orderList.length)
        console.log("out")
        console.log(this.orderList)
        if(this.orderList.length==0){
          this.purchasesPresent=false;
        }
        else{
          console.log(this.orderList)
          this.purchasesPresent=true;
          this.orderCount = this.orderList.length;
          
          }});}

    // getusername(id:any):string
    // {
    //         this.adminService.getUsers()
    //         .subscribe((res: any) => {
    //         console.log(res);
    //         this.username=(res.find((i:any)=>i.userID===id).userName)})
    //         return this.username 
            
    //       } 
          

          getdetails(orderid:any,userid:any)
          {
            this.cartdataService.orderid.next(orderid)
            this.cartdataService.userid.next(userid);
            
          }
        }
      
// getpurchases()
// {
//   console.log("count"+this.orderCount)
//     for (let i=0;i<this.orderCount;i++) {
//     console.log("varsha")
//     setTimeout(()=>{this.getpurchasebyorder(this.orderList[i])},1000)
    
//     setTimeout(()=>{this.getdiscounts(this.orderList[i].couponId)},1000)
//     setTimeout(()=>{this.getallorders()},1000)
    
     
  
//       }
// } 
// async getpurchasebyorder(order:any)
// {

//   console.log("hi")
//   this.cartService.getPurchaseByOrderid(order.orderId).subscribe((pur:any) => {
       
     
//      console.log("slist")
//      console.log(pur)
//      setTimeout(()=>{this.purchaseList=pur},5000)})
    
//   }


//    getdiscounts(couponid:any)
//   {
//     this.cartService.getDiscounts()
//     .subscribe((discounts: any) => {
//       this.discountdetail=discounts.find((i:any)=>i.couponId===couponid)
//       console.log(this.discountdetail)
//     })
    
//   }


// //   }) 
// getallorders(){
//   console.log(this.purchaseList)
//   for (var purchase of this.purchaseList) {
//     console.log("inside")
//     console.log(purchase)
//     let qty=purchase.qty;
//     this.cartService.getBookById(purchase.bookId).subscribe((book: any) => {
//       console.log("book")
//       console.log(book)
//       this.bookdetails=book
//       this.allorders.push({title:book[0].title,image:book[0].bookImage,coupon:this.discountdetail.couponCode,qty:qty,price:(book[0].bookPrice*qty*(100-this.discountdetail.disPercent)/100)})
//       console.log(this.allorders)
// console.log("end")

//     });}
    
// }           
// }
     
              