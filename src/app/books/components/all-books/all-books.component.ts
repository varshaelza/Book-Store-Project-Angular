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
  bookId:any;
  booksPresent=true;
  constructor(private menuService: MenuService, private bookService: BooksService) { }

  ngOnInit(): void {
    this.menuService.searchVal.subscribe((res:any)=>{
      this.searchValue = res;

      this.bookService.getBooksByCatId(this.searchValue).subscribe((val:any)=>{
        this.bookList = val.filter((p: any)=>p.bookStatus==true);
      })
    });


  }


  isAvailable(data: any): any {
    if (data == 0) {
      return true;
    }
    return false;
  }


  handleAddToCart(book: any){
    this.bookId = book.bookId;
    console.log(this.bookId);
    this.bookService.addToCart(book).subscribe((res: any)=>{
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

}
