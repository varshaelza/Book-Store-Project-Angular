import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
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
  orderObj:any={
    userId:JSON.parse(localStorage.getItem('authToken') || '{}'),
    couponId:0,
    totalAmt:0,
    datetimeOrder:''
  };


  constructor(private checkoutService: CartService, private activatedRoute: ActivatedRoute,private router: Router) { }
  
  updateAddressform = new FormGroup({
    userAddress : new FormControl('')
  });

  couponRedeemForm= new FormGroup({
    couponCode: new FormControl('')
  })



  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('authToken') || '{}');
    this.getUserbyId(); 
    this.defaultcouponCode={couponCode:'BS000'}
    this.getdefaultCouponId();
    
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
        this.orderObj.couponId=this.discountObj[0].couponId;          
       
     });             
}

 
  handleCheckout():any{
    console.log(this.orderObj);
    this.checkoutService.addOrder(this.orderObj)
    .subscribe((res:any)=>{
      console.log(res);
      alert('Thank you for shopping');
    });
  }


  getUserbyId():any{
    this.checkoutService.getUserByUserId(this.currentUser)
    .subscribe((res:any)=>{
      console.log('userIdcomponent');
      console.log(res); 
      this.loggedInUser=res;
    })   
  } 

  handleUpdateUser():any{
    //console.log(this.updateAddressform.value);
    this.newAddress=this.updateAddressform.value;    
    this.loggedInUser.userAddress=this.newAddress.userAddress;
    //console.log(this.loggedInUser)
    this.checkoutService.updateUserAddress(this.loggedInUser)
     .subscribe((res:any)=>{
       alert('New Address updated')
       console.log(res);             
     });       
  }

}
