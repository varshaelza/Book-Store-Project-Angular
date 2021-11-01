import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  isLoggedIn = true;
  isActive:any=true

  constructor(private authService:AuthService, private router:Router, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  handleLogin(formData:any){
    console.log("logging in");
    console.log(formData.value);
    this.authService.login(formData.value).subscribe((res:any)=>{ 
      console.log(res)
      
      if(res&&res.isactive==false)
      {
        this.isActive=false
        this.isLoggedIn = false;
      }
      else if(res && res.userID){
        localStorage.setItem('authToken', res.userID);
        this.authService.adminstatus.next(res.isAdmin);
        //read query parameter to now return url
        this.isLoggedIn = true;
        this.router.navigateByUrl(this.activeRoute.snapshot.queryParams['returnURL']);
      }
     
      else{
        
        this.isLoggedIn = false;
        this.loginForm.setValue({username: '', password: ''});
      }
      
    });
  }
}
