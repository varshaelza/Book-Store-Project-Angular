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


  constructor(private authService:AuthService, private router:Router, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  handleLogin(formData:any){
    console.log("logging in");
    console.log(formData.value);
    this.authService.login(formData.value).subscribe((res:any)=>{ 
      console.log(res)
      
      if(res && res.userID){
        alert("Login success");
        localStorage.setItem('authToken', res.userID);
        this.authService.adminstatus.next(res.isAdmin);
        // if(res.userName=="admin"){
        //   
        //   console.log(res.isAdmin);
        //   localStorage.setItem('adminStatus', "true");
        // }else{
        //   this.authService.adminstatus.next(res.isAdmin);
        //   localStorage.setItem('adminStatus', "false");
        // }
        
        //read query parameter to now return url
        
        this.router.navigateByUrl(this.activeRoute.snapshot.queryParams['returnURL']);
      }else{
        alert("Login Unsuccesfull!! Please check your username and password");
        this.loginForm.setValue({username: '', password: ''});
      }
      
    });
  }
}
