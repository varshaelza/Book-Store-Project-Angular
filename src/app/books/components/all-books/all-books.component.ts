import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/shared/services/menu.service';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit {
  searchValue: any;
  bookList: any[] = [];
  constructor(private menuService: MenuService, private bookService: BooksService) { }

  ngOnInit(): void {
    this.menuService.searchVal.subscribe((res:any)=>{
      this.searchValue = res;

      this.bookService.getBooksByCatId(this.searchValue).subscribe((val:any)=>{
        this.bookList = val;
      })
    });


  }


  isAvailable(data: any): any {
    if (data == 0) {
      return true;
    }
    return false;
  }

}
