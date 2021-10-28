import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-manage-discounts',
  templateUrl: './manage-discounts.component.html',
  styleUrls: ['./manage-discounts.component.scss']
})
export class ManageDiscountsComponent implements OnInit {
  discounts:any;
  dis:any={couponId:0,couponCode:"",minPurchase:0,disPercent:0};
  dupdis:any={couponId:0,couponCode:"",minPurchase:0,disPercent:0};
  updateSaved:any=false;
  firstmodal:any=true
  isdeleted:any=true;
  
  constructor(private adminService :AdminService) { }

  ngOnInit(): void {
    console.log("submitting");
    this.adminService.getDiscounts()
  .subscribe( (res:any) =>{
    console.log(res)
    this.discounts=res;
  })
  }

  handledisdelete(discount:any)
  {
    this.adminService.deleteDiscount(discount.couponId)
    .subscribe( (res:any) =>{
     if(res.find((i:any)=>i.couponId===discount.couponId)!=null)
     {this.isdeleted=false;}
  
    this.discounts=res
  })
}

handlemodalopen(discount:any)
{
  this.isdeleted=true;
  this.dis=discount;
  this.dupdis = { ...discount  }; 
  console.log(this.dis)
  this.updateSaved=false
  this.firstmodal=true
  
  
}
handledisupdate()
{
  console.log(this.dupdis);
    this.firstmodal=false;
    // 2. send the above data to the service
    this.updateSaved=false
    this.adminService.updateDiscount(this.dupdis)
      .subscribe( (res: any) => { // 3. get the response from service
        console.log(res);
        this.discounts=res
        if(res.find((i:any)=>i.couponId===this.dupdis.couponId&&i.couponCode===this.dupdis.couponCode&&i.minPurchase===this.dupdis.minPurchase&&i.disPercent===this.dupdis.disPercent)!=null){
          this.updateSaved = true;
        }
      });
}
}
