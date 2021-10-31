import { Component, OnInit, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { BooksService } from 'src/app/books/services/books.service';
import { CartService } from 'src/app/shopping/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartList: any[] = [];
  bookList: any[] = [];
  qtyList: any[] = [];
  cartCount=0;
  booksPresent: any=true;
  currentUser: any;
  totalPrice = 0;
  cartitem:any;
  constructor(private cartService: CartService, private bookService: BooksService) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('authToken') || '{}');

    this.getcartbyUserid();

  }

  getcartbyUserid()
  {
    this.cartList=[]
    this.bookList=[]
    this.totalPrice=0
    this.cartService.getCartbyUserId(this.currentUser)
      .subscribe((res: any) => {
        console.log(res);
        this.cartList = res;
        if(this.cartList.length==0){
          this.booksPresent=false;
        }
        this.cartCount = this.cartList.length;
        for (var r of this.cartList) {
          this.bookService.getBookById(r.bookId).subscribe((book: any) => {
            var cartItem = this.cartList.find(p => p.bookId == book[0].bookId);
            book[0].Qty = cartItem.bookQty;
            this.totalPrice+=book[0].bookPrice*book[0].Qty;
            this.bookList.push(book[0]);
          });
        }

      });
  }
  handleQtyadd(book:any)
  {
    
    this.cartitem=this.cartList.find((i:any)=>i.bookId===book.bookId)
    this.cartitem.bookQty=this.cartitem.bookQty+1;
    this.cartService.updateBookQty(this.cartitem).subscribe((books: any) =>{
    console.log(books);
    this.getcartbyUserid();
    })

  }

  handleQtysub(book:any)
  {
    this.cartitem=this.cartList.find((i:any)=>i.bookId===book.bookId)
    this.cartitem.bookQty=this.cartitem.bookQty-1;
    this.cartService.updateBookQty(this.cartitem).subscribe((books: any) =>{
    console.log(books);
    this.getcartbyUserid();
    })
 
  }

  handleDelete(book:any)
  {
    this.cartitem=this.cartList.find((i:any)=>i.bookId===book.bookId) 
    this.cartService.deleteBookfromCart(this.cartitem.cartId).subscribe((books: any) =>{
      console.log(books);
      this.getcartbyUserid();
      })
  }
}

