import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/services/admin.service';
import { BooksService } from 'src/app/books/services/books.service';
import { CartDataService } from 'src/app/shared/services/cart-data.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  orderid:number
  userid:any
  username:any
  orders:any
  purchaseList:any
  quantity:any
  users:any
  constructor(private cartdataservice:CartDataService,private bookService :BooksService, private adminService:AdminService,private cartService:CartService) {
    this.orderid=1
   }

  ngOnInit(): void {
    this.purchaseList=[]
    this.orders=[]
    // this.cartdataservice.latestorderid
    // .subscribe((id)=>{
    //   this.orderid=id;
    // });
    this.orderid = JSON.parse(localStorage.getItem('orderid') || '{}');
    this.userid = JSON.parse(localStorage.getItem('userid') || '{}');
  



// this.cartdataservice.latestuserid
// .subscribe((id)=>{
//   this.userid=id;
// });;
console.log(this.userid)

            
    this.cartService.getPurchaseByOrderid(this.orderid)
    .subscribe((res: any) => {
      console.log(res);
      this.purchaseList = res
      for (var r of this.purchaseList) {
        this.quantity=r.qty
        console.log("hhh"+this.quantity)
        this.bookService.getBookById(r.bookId).subscribe((book: any) => {
          var purchaseitem = this.purchaseList.find((p:any) => p.bookId == book[0].bookId);
         console.log(this.quantity)
          
          console.log(book)
          var detail={
            title:book[0].title,
            author:book[0].author,
            price:book[0].bookPrice,
            image:book[0].bookImage,
            qty:purchaseitem.qty

          }
          this.orders.push(detail);
          console.log(detail)
          console.log("reaaaaaach")
          console.log(this.orders)
        });
        
      }

    });
    this.adminService.getUserbyID(this.userid)
.subscribe( (res:any) =>{ 
  console.log("heyyyyyyyyyyyy")
console.log(res)
this.username=res.userName
})
                  
                
    
    

  }

}
