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

  constructor(private cartService: CartService, private bookService: BooksService) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('authToken') || '{}');

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

}
