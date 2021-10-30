import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
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

}
function res(res: any, any: any): import("rxjs").OperatorFunction<ArrayBuffer, unknown> {
  throw new Error('Function not implemented.');
}



