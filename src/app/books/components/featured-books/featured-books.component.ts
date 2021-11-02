import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-featured-books',
  templateUrl: './featured-books.component.html',
  styleUrls: []
})
export class FeaturedBooksComponent implements OnInit {
  bookList: any[] = [];
  bookId: any;
  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((res: any) => {
      this.bookList = res.filter((p: any)=>p.bookStatus==true);
      this.bookList = this.bookList.slice(0, 6);
    })

  }


  isAvailable(data: any): any {
    if (data == 0) {
      return true;
    }
    return false;
  }


  handleAddToCart(book: any) {
    this.bookId = book.bookId;
    console.log(this.bookId);
    this.bookService.addToCart(book).subscribe((res: any) => {
      console.log(res);
    })
  }

  handleAddToWishlist(book: any) {
    this.bookId = book.bookId;
    console.log(this.bookId);
    this.bookService.addToWishList(book).subscribe((res: any) => {
      console.log(res);
    })
  }


}
