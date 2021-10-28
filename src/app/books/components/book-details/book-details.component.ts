import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../services/books.service';



@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit { 

  bookslist: any[]=[]
  constructor(private booksService: BooksService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    
    this.booksService.getBooksByCatId(id)
      .subscribe( (res: any) => {
        console.log(res);
        this.bookslist = res;
      });

  }

}
