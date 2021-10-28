import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart-data.service';
import { BooksService } from '../../services/books.service';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styles: [
  ]
})
export class BookListComponent implements OnInit {
  bookList: any[] = [];
  availability = false;
  searchKey: string = "";
  constructor(private bookService: BooksService, private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('p_catID');

    this.bookService.getBooksByCatId(id)
      .subscribe((res: any) => {
        console.log(id);
        console.log(res);
        for (var r of res) {
          if (r.bookStatus) {
            this.bookList.push(r)
          }
        }

        //this.bookList = res;
      });

    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    });



  }

  isAvailable(data: any): any {
    if (data == 0) {
      return true;
    }
    return false;
  }

}
