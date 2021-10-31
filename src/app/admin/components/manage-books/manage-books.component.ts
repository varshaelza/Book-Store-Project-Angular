import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminService } from '../../services/admin.service';





@Component({
  selector: 'app-manage-books',
  templateUrl: './manage-books.component.html',
  styleUrls: ['./manage-books.component.scss']
})
export class ManageBooksComponent implements OnInit {
  books: any;
  dupbook: any = { bookId: 0, categoryId: 0, title: '', bookDescription: '', bookPosition: 0, bookStatus: true, author: '', bookImage: '', ISBN: 0, year: 0, bookPrice: 0, availableQty: 0 }
  isdeleted: any = true;
  addSaved: any = false;
  updateSaved: any = false;
  firstmodal: any = true;
  categories: any;
  fileToUpload: any;
  imageSelected: any;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    console.log("Loading");
    this.adminService.getBooks()
      .subscribe((res: any) => {
        console.log(res)
        this.books = res;
        console.log(this.books.length)


      })

  }

  moveBookup(book: any) {

    this.isdeleted = true;
    console.log("Updating Book Position");
    let shiftid = this.books[this.books.indexOf(book) - 1].bookId
    let shiftpos = this.books[this.books.indexOf(book) - 1].bookPosition
    console.log(this.books.indexOf(book) - 1)
    this.adminService.updateBookbyPos(book.bookId, book.bookPosition - 1)
      .subscribe((res: any) => {
        console.log(res)

      })
    this.adminService.updateBookbyPos(shiftid, shiftpos + 1)
      .subscribe((res: any) => {
        console.log(res)
        this.books = res;




      })
  }

  moveBookdown(book: any) {
    this.isdeleted = true;
    console.log("Updating Book Position");
    let shiftid = this.books[this.books.indexOf(book) + 1].bookId
    let shiftpos = this.books[this.books.indexOf(book) + 1].bookPosition
    console.log(this.books.indexOf(book) + 1)
    this.adminService.updateBookbyPos(book.bookId, book.bookPosition + 1)
      .subscribe((res: any) => {
        console.log(res)
      })
    this.adminService.updateBookbyPos(shiftid, shiftpos - 1)
      .subscribe((res: any) => {
        console.log(res)
        this.books = res;




      })

  }

  deleteBook(book: any) {

    this.adminService.deleteBook(book.bookId)
      .subscribe((res: any) => {
        if (res.find((i: any) => i.bookId === book.bookId) != null) { this.isdeleted = false; }

        this.books = res

      })


  }
  handleaddmodalopen() {
    this.adminService.getCategories()
      .subscribe((res: any) => {
        console.log(res)
        this.categories = res;
        console.log(this.categories)
      })
    this.dupbook = { bookId: 0, categoryId: 0, title: '', bookDescription: '', bookPosition: 1, bookStatus: true, author: '', bookImage: '', ISBN: 0, year: 0, bookPrice: 0, availableQty: 0 }
    this.isdeleted = true;
    this.firstmodal = true;
    this.addSaved = false;
    // this.dupbook={bookId:0,categoryId:0,title:'',bookDescription:'',bookPosition:0,bookStatus:true,author:'',bookImage:'',ISBN:0,year:0,bookPrice:0,availableQty:0}

  }

  handlebookadd() {

    if (this.dupbook.categoryId == 0) {
      this.dupbook.categoryId = 1
    }
    console.log(this.dupbook)
    this.firstmodal = false;
    this.adminService.addBook(this.dupbook)
      .subscribe((res: any) => {
        console.log(res)
        this.books = res;
        if (res.find((i: any) => i.title === this.dupbook.title && i.bookDescription === this.dupbook.bookDescription && i.author === this.dupbook.author && i.categoryId === this.dupbook.categoryId && i.ISBN === this.dupbook.ISBN && i.year === this.dupbook.year && i.bookPrice === this.dupbook.bookPrice && i.availableQty === this.dupbook.availableQty && i.bookImage === this.dupbook.bookImage) != null) {
          this.addSaved = true;
        }
      })
  }

  handleupdatemodalopen(book: any) {

    this.isdeleted = true;
    this.firstmodal = true;
    this.updateSaved = false;
    this.dupbook = { ...book };
    console.log(this.dupbook)
    this.adminService.getCategories()
      .subscribe((res: any) => {
        console.log(res)
        this.categories = res;
      })

  }
  setcatid(event: any) {
    // console.log("hi")
    this.dupbook.categoryId = +event.target.value;
    console.log("hhh" + this.dupbook.categoryId)
    console.log(this.dupbook)
  }
  handlebookupdate() {
    this.firstmodal = false;
    this.adminService.updateBook(this.dupbook)
      .subscribe((res: any) => {
        console.log(res)
        this.books = res;
        if (res.find((i: any) => i.bookId === this.dupbook.bookId && i.title === this.dupbook.title && i.bookDescription === this.dupbook.bookDescription && i.author === this.dupbook.author && i.categoryId === this.dupbook.categoryId && i.ISBN === this.dupbook.ISBN && i.year === this.dupbook.year && i.bookPrice === this.dupbook.bookPrice && i.availableQty === this.dupbook.availableQty && i.bookImage === this.dupbook.bookImage) != null) {
          this.updateSaved = true;
        }
      })
  }

  handlestatusEdit(book: any) {
    this.isdeleted = true
    book.bookStatus = !book.bookStatus
    this.adminService.updateBook(book)
      .subscribe((res: any) => {
        console.log(res)
        this.books = res;
      })
  }

    
}
