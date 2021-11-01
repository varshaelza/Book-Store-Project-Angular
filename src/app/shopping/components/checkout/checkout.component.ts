import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CartDataService } from 'src/app/shared/services/cart-data.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styles: [
  ]
})
export class CheckoutComponent implements OnInit {
  currentUser: any;
  loggedInUser:any;
  newAddress:any;
  defaultcouponCode:any;  
  defCouponobj:any; 
  discountObj:any; 
  userAddress:any; 
  totalAmount:any
  discountedprice:any
  discounts:any
  addressupdated:any
  validcoupon:any=true;
  orderObj:any={
    userId:JSON.parse(localStorage.getItem('authToken') || '{}'),
    couponId:0,
    totalAmt:0,
    datetimeOrder:''

  };


  constructor(private cartdataService:CartDataService, private route:Router, private checkoutService: CartService, private activatedRoute: ActivatedRoute,private router: Router) { }
  
  couponRedeemForm= new FormGroup({
    couponCode: new FormControl('')
  })



  ngOnInit(): void {
   

    // console.log("dis------"+this.discountedprice)
    this.currentUser = JSON.parse(localStorage.getItem('authToken') || '{}');
    this.getUserbyId(); 
    

    this.defaultcouponCode={couponCode:'BS000'}
    this.getdefaultCouponId();
    this.totalAmount=JSON.parse(localStorage.getItem('checkoutAmt') || '{}');
    this.discountedprice=JSON.parse(localStorage.getItem('checkoutAmt') || '{}');
    console.log("fffewfwfwggewgewgg"+this.discountedprice)
    this.checkoutService.getApplicablediscounts(this.totalAmount)
    .subscribe((res:any)=>{
      console.log(res);
      this.discounts=res})
    
  }
  getdefaultCouponId():any{
    this.checkoutService.getbyCouponCode(this.defaultcouponCode)
     .subscribe((res:any)=>{
       console.log(res);
       this.defCouponobj=res;
       this.orderObj.couponId=this.defCouponobj[0].couponId
 
     });
  }

  handleCoupon():any{   
    this.checkoutService.getbyCouponCode (this.couponRedeemForm.value)
     .subscribe((res:any)=>{
       console.log('after redeem');         
        this.discountObj=res; 
        console.log(res)  ; 
        if(res.length==0||(this.discounts.find((p:any)=>p.couponCode==res[0].couponCode))==null)
        {
          this.validcoupon=false;
          console.log("inside if")
        }
        else{
        this.discountedprice=this.totalAmount*(100-res[0].disPercent)/100     
        this.orderObj.couponId=this.discountObj[0].couponId;    
        this.validcoupon=true;
        }      
       
     });             
}

 
  handleCheckout():any{
    console.log(this.orderObj);
    this.checkoutService.addOrder(this.orderObj)
    .subscribe((res:any)=>{
      console.log(res);
      this.route.navigateByUrl('/confirm')
    });
  }


  getUserbyId():any{
    this.checkoutService.getUserByUserId(this.currentUser)
    .subscribe((res:any)=>{
      console.log('userIdcomponent');
      console.log(res); 
      this.loggedInUser=res;
      this.userAddress=this.loggedInUser.userAddress
      console.log(this.userAddress)
    })   
  } 

  handleUpdateUser():any{
    //console.log(this.updateAddressform.value);
        
    this.loggedInUser.userAddress=this.userAddress;
    //console.log(this.loggedInUser)
    this.checkoutService.updateUserAddress(this.loggedInUser)
     .subscribe((res:any)=>{
       this.addressupdated=true;
       console.log(res);             
     });       
  }

}
