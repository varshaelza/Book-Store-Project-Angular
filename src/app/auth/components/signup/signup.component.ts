import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Directive } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validator } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [
  ]
})


export class SignupComponent implements OnInit {

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute,private router: Router ) { }  

  addUserForm = new FormGroup({
    
    userName: new FormControl('', [Validators.required]),
    userPassword: new FormControl('', [Validators.required]), 
    firstName: new FormControl('', [Validators.required]), 
    lastName: new FormControl(''),
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    userMobile: new FormControl('', [Validators.required]),
    userAddress: new FormControl('', [Validators.required])
  });
   userlist: any[]=[];
  ngOnInit(): void {  

  }
  handleAddUser():void {  
    console.log('Submitting');     
    
    this.authService.createUser(this.addUserForm.value)
      .subscribe( (res: any) => { 
        this.userlist=res;
        let lastuser=this.userlist[this.userlist.length-1];
        let addeduser= this.addUserForm.value;
        if(res && lastuser.userEmail==addeduser.userEmail){
          this.router.navigate(['']);
        }
        else{
          alert('Invalid username. Please try again');
        }
     
      });

  }

}
