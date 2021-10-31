import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  bookId: any;
  bookDetails: any;
  constructor(private bookService: BooksService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('Inside ngOnInit');
    // Read url param
    let id = this.route.snapshot.paramMap.get('bookId');

    this.bookService.getBookById(id)
      .subscribe((res: any) => {
        console.log(res);
        this.bookDetails = res;
      });

  }

  handleAddToCart(book: any) {
    this.bookId = book.bookId;
    console.log(this.bookId);
    this.bookService.addToCart(book).subscribe((res: any) => {
      console.log(res);
    })
  }

  handleAddToWishlist(book:any){
    this.bookId = book.bookId;
    console.log(this.bookId);
    this.bookService.addToWishList(book).subscribe((res: any)=>{
      console.log(res);
    })
  }

  isAvailable(data: any): any {
    if (data == 0) {
      return true;
    }
    return false;
  }
}
