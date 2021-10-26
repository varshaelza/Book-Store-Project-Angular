import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {

  userslist:any;
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
  
  console.log("Getting all users");
  this.adminService.getUsers()
.subscribe( (res:any) =>{
  console.log(res)
  this.userslist=res;
})
}
handleEdit(user:any)
{
  console.log(user.isactive)
  user.isactive=!user.isactive
  console.log(user)

  console.log("Editting user");
  this.adminService.editUser(user)
.subscribe( (res:any) =>{
  console.log(res)
  this.userslist=res;
})
}
}
