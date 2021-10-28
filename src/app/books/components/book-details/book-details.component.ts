import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  bookDetails: any;
  constructor(private bookService:BooksService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log('Inside ngOnInit');
    // Read url param
    let id = this.route.snapshot.paramMap.get('bookId');
    
    this.bookService.getBookById(id)
      .subscribe( (res: any) => {
        console.log(res);
        this.bookDetails = res;
      });
  }

}
