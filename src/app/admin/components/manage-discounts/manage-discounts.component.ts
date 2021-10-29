import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-manage-discounts',
  templateUrl: './manage-discounts.component.html',
  styleUrls: ['./manage-discounts.component.scss']
})
export class ManageDiscountsComponent implements OnInit {
  discounts:any;
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
     {alert('Unable to delete : Discount in use')}
  
    this.discounts=res
  })
}
}
