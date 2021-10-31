import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';


import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService { 

  constructor(private http: HttpClient) { }
  usersname:any=''; 
  createUser( formData: any):any{    
    return this.http.post('https://localhost:44346/api/Users', formData)
      .pipe( map((res: any) => {              
        return res;
      })); 
  }

  currUrl: any;
  public adminstatus = new BehaviorSubject<boolean>(false); 


  login(formData: any): any {
    console.log(formData);
    this.currUrl = `https://localhost:44346/api/Users?p_userName=${formData.username}&p_pwd=${formData.password}`
    return this.http.get(this.currUrl).pipe(map((res: any) => {
      console.log(res);
      return res;
    }));
  }

  isAuth() {
    if (localStorage.getItem('authToken')) {
      return true;
    } else {
      return false;
    }
  }

  isAdminAuth() {
    if (localStorage.getItem('authToken') == '1') {
      return true;
    } else {
      return false;
    }
  }

}
function res(res: any, any: any): import("rxjs").OperatorFunction<ArrayBuffer, unknown> {
  throw new Error('Function not implemented.');
}

