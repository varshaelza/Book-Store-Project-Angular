import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
  currentUser: any;
  userDetails: any;
  dupUserData: any;
  currUser: any;
  isadmin=false;
  isUpdated = false;
  newList: any[] =[];
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('authToken') || '{}');

    this.profileService.getUserById(this.currentUser)
      .subscribe((res: any) => {
        console.log(res);
        if(res.isAdmin){
          this.isadmin = true;
        }
        this.userDetails= res;
      });

  }


  handleEditModalOpen(): void{
    this.dupUserData = { ...this.userDetails  }; 
  }

  handleUpdateUser(): void{
    console.log(this.dupUserData); // submittable formdata

    this.profileService.updateUser(this.dupUserData)
      .subscribe( (res: any) => {
        console.log(res);
        this.newList = res;
        var currUser= this.newList.find(p=>p.userID == this.userDetails.userID);
        console.log(currUser);
        if(currUser && currUser.userID){
          console.log(1);
          this.isUpdated = true;
          this.userDetails = currUser;
        }
      });
  }


}
