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
  dupcat:any={categoryName:"",categoryPosition:0,categoryDesc:'',categoryStatus:0,categoryImg:'',categoryId:0,categoryCreatedAt:''}
  isdeleted:any=true;
  addSaved:any=false;
  updateSaved:any=false;
  firstmodal:any=true;
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

    this.isdeleted=true
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

    this.isdeleted=true;
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
    
    this.adminService.deleteCategory(category.categoryId)
    .subscribe( (res:any) =>{
     if(res.find((i:any)=>i.categoryId===category.categoryId)!=null)
     {
       this.isdeleted=false
     }
  
    this.categories=res
    
  })
 

}
handleaddmodalopen()
{
  this.isdeleted=true;
  this.firstmodal=true;
  this.addSaved=false;
  this.dupcat={categoryName:'',categoryPosition:1,categoryDesc:'',categoryStatus:1,categoryImg:'',categoryId:0,categoryCreatedAt:''}
  

}

handlecatadd()
{
  this.firstmodal=false;
  this.adminService.addCategory(this.dupcat)
    .subscribe( (res:any) =>{
    console.log(res)
    this.categories=res;
    if(res.find((i:any)=>i.categoryDesc===this.dupcat.categoryDesc&&i.categoryName===this.dupcat.categoryName&&i.categoryImg===this.dupcat.categoryImg&&i.categoryPosition===this.dupcat.categoryPosition&&i.categoryStatus===true)!=null)
     {
       this.addSaved=true;
     }
    
  })
}

handleupdatemodalopen(cat:any)
{
  this.isdeleted=true;
  this.firstmodal=true;
  this.updateSaved=false;
  this.dupcat = { ...cat  }; 

}
handlecatupdate()
{
  this.firstmodal=false;
  this.adminService.updateCategory(this.dupcat)
    .subscribe( (res:any) =>{
    console.log(res)
    this.categories=res;
    if(res.find((i:any)=>i.categoryId===this.dupcat.categoryId&&i.categoryDesc===this.dupcat.categoryDesc&&i.categoryName===this.dupcat.categoryName&&i.categoryImg===this.dupcat.categoryImg&&this.dupcat.categoryPosition===i.categoryPosition&&i.categoryStatus===this.dupcat.categoryStatus)!=null)
     {
       this.updateSaved=true;
     }
    
  })
}

handlestatusEdit(cat:any)
  {
    cat.categoryStatus=!cat.categoryStatus
    this.adminService.updateCategory(cat)
    .subscribe( (res:any) =>{
    console.log(res)
    this.categories=res;
  })
}

}
