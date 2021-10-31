import { Component, OnInit } from '@angular/core';
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
  constructor(private cartService: CartService, private bookService: BooksService) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('authToken') || '{}');

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
}

