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
}
