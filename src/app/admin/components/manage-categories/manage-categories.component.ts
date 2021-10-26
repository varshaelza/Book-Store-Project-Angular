import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.scss']
})
export class ManageCategoriesComponent implements OnInit {

  categories:any;
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    console.log("submitting");
    this.adminService.getCategories()
  .subscribe( (res:any) =>{
    console.log(res)
    this.categories=res;
    
    
  })

  }

}

