import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';


@Component({
  selector: 'app-manage-books',
  templateUrl: './manage-books.component.html',
  styleUrls: ['./manage-books.component.scss']
})
export class ManageBooksComponent implements OnInit {
  books:any;

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    console.log("Loading");
    this.adminService.getBooks()
  .subscribe( (res:any) =>{
    console.log(res)
    this.books=res;
    console.log(this.books.length)
    
    
  })

  }

  moveBookup(book:any)
  {


    console.log("Updating Book Position");
    let shiftid=this.books[this.books.indexOf(book)-1].bookId
    let shiftpos=this.books[this.books.indexOf(book)-1].bookPosition
    console.log(this.books.indexOf(book)-1)
    this.adminService.updateBookbyPos(book.bookId,book.bookPosition-1)
    .subscribe( (res:any) =>{
      console.log(res)
      
    })
    this.adminService.updateBookbyPos(shiftid,shiftpos+1)
  .subscribe( (res:any) =>{
    console.log(res)
    this.books=res;
    
    

    
  })
  }

  moveBookdown(book:any)
  {
    console.log("Updating Book Position");
    let shiftid=this.books[this.books.indexOf(book)+1].bookId
    let shiftpos=this.books[this.books.indexOf(book)+1].bookPosition
    console.log(this.books.indexOf(book)+1)
    this.adminService.updateBookbyPos(book.bookId,book.bookPosition+1)
    .subscribe( (res:any) =>{
      console.log(res)      
    })
    this.adminService.updateBookbyPos(shiftid,shiftpos-1)
  .subscribe( (res:any) =>{
    console.log(res)
    this.books=res;
    
    

    
  })

}
deleteBook(book:any)
{
  
  this.adminService.deleteBook(book.bookId)
  .subscribe( (res:any) =>{
   if(res.find((i:any)=>i.bookId===book.bookId)!=null)
   {alert('Unable to delete :Book in use')}

  this.books=res
  
})


}

}
