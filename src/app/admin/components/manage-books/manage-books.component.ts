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
    console.log("submitting");
    this.adminService.getBooks()
  .subscribe( (res:any) =>{
    console.log(res)
    this.books=res;
    
    
  })

  }

}
