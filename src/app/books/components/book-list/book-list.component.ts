import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../services/books.service';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styles: [
  ]
})
export class BookListComponent implements OnInit {
  bookList: any[] = [];
  constructor(private bookService: BooksService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('p_catID');
    
    this.bookService.getBooksByCatId(id)
      .subscribe( (res: any) => {
        console.log(id);
        console.log(res);
        for (var r of res) {
          if(r.bookStatus){
            this.bookList.push(r)
          }
        }
        
        //this.bookList = res;
      });
  }

}
