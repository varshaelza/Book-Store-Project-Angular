import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/books/services/books.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  currentUser: any;
  wishList: any[] = [];
  bookList: any[] = [];
  booksPresent: any = true;
  wishitem:any;
  bookId: any;

  constructor(private cartService: CartService, private bookService: BooksService) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('authToken') || '{}');

    this.getwishbyUserid();

  }

  getwishbyUserid()
  {
    this.wishList=[]
    this.cartService.getWishListbyUserId(this.currentUser)
    .subscribe((res: any) => {
      console.log(res);
      this.wishList = res;
      if (this.wishList.length == 0) {
        this.booksPresent = false;
      }
      for (var r of this.wishList) {
        this.bookService.getBookById(r.bookId).subscribe((book: any) => {
          this.bookList.push(book[0]);
        });
      }

    });

  }

  handleDelete(book:any)
  {
    this.wishitem=this.wishList.find((i:any)=>i.bookId===book.bookId) 
    this.cartService.deleteBookfromWishlist(this.wishitem.wishId).subscribe((books: any) =>{
      console.log(books);
      this.getwishbyUserid();
      })
  }

  handleAddToCart(book: any){
    this.bookId = book.bookId;
    console.log(this.bookId);
    this.cartService.addToCart(book).subscribe((res: any)=>{
      console.log(res);
    })
  }

}
