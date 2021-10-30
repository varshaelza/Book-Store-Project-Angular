import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currUrl: any;
  public adminstatus = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) { }


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
