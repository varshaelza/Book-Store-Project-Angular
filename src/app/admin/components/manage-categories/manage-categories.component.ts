import { analyzeAndValidateNgModules } from '@angular/compiler';
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

  moveCategoryup(category:any)
  {


    console.log("Updating Category Position");
    let shiftid=this.categories[this.categories.indexOf(category)-1].categoryId
    let shiftpos=this.categories[this.categories.indexOf(category)-1].categoryPosition
    console.log(this.categories.indexOf(category)-1)
    this.adminService.updateCategorybyPos(category.categoryId,category.categoryPosition-1)
    .subscribe( (res:any) =>{
      console.log(res)
      
    })
    this.adminService.updateCategorybyPos(shiftid,shiftpos+1)
  .subscribe( (res:any) =>{
    console.log(res)
    this.categories=res;
   
  })
  }

  moveCategorydown(category:any)
  {

    
    console.log("Updating Category Position");
    let shiftid=this.categories[this.categories.indexOf(category)+1].categoryId
    let shiftpos=this.categories[this.categories.indexOf(category)+1].categoryPosition
    console.log(this.categories.indexOf(category)+1)
    this.adminService.updateCategorybyPos(category.categoryId,category.categoryPosition+1)
    .subscribe( (res:any) =>{
      console.log(res)
      
    })
    this.adminService.updateCategorybyPos(shiftid,shiftpos-1)
  .subscribe( (res:any) =>{
    console.log(res)
    this.categories=res;
    
  })
  
  
  }


  deleteCategory(category:any)
  {
    let dupcat:any=category;
    this.adminService.deleteCategory(category.categoryId)
    .subscribe( (res:any) =>{
    console.log(res.indexOf(dupcat)!==-1)
    
    
     if(res.find((i:any)=>i.categoryId===category.categoryId)!=null)
     {alert('Unable to delete : Category in use')}
  
    this.categories=res
    
  })
 

}
}
