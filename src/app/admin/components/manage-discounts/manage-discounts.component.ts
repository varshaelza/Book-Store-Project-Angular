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
  addSaved:any=false;
  firstmodal:any=true
  isdeleted:any=true;
  addDiscountForm = new FormGroup({
    // Step 2: Have the form element equivalents in TS
    couponCode: new FormControl('', Validators.required), // Step 5: Let's work on form validations
    minPurchase: new FormControl('', [Validators.required]), // Refer TS for Step 6
    disPercent: new FormControl('', [Validators.required])
  });
  
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

handleUpdatemodalopen(discount:any)
{
  
  
  this.isdeleted=true;
  this.dis=discount;
  this.dupdis = { ...discount  }; 
  console.log(this.dis)
  this.updateSaved=false
  this.firstmodal=true
  
  
}

handleAddmodalopen()
{
  this.addDiscountForm.reset({})
  this.isdeleted=true; 
  console.log(this.dis)
  this.addSaved=false
  this.firstmodal=true
  
  
}

handledisadd()
{
  if(this.discounts.find((i:any)=>i.couponCode===this.addDiscountForm.value.couponCode))
  {
    this.addSaved=false
    this.firstmodal=false
  }
  else
  {
  this.firstmodal=false
  console.log(this.addDiscountForm.value);
  this.adminService.addDiscount(this.addDiscountForm.value)
      .subscribe( (res: any) => { // 3. get the response from service
        console.log(res);
        this.discounts=res
        if(res.find((i:any)=>i.couponCode===this.addDiscountForm.value.couponCode&&i.minPurchase===this.addDiscountForm.value.minPurchase&&i.disPercent===this.addDiscountForm.value.disPercent)!=null){
          this.addSaved = true;
        }
      });
    }
}
handledisupdate()
{
  console.log(this.dupdis);
    this.firstmodal=false;
    // 2. send the above data to the service
    // this.updateSaved=false
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
