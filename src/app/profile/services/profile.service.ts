import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getUserById(userId: string | null): any{ 

    console.log(userId);
    let userUrl = `https://localhost:44346/api/Users?p_userId=${userId}`;
    return this.http.get(userUrl)
      .pipe(map( (res: any) => {
        console.log(res);
        return res;
      }));
  }
  updateUser(formData: any): any{
    console.log(formData);
    let updateURL = `https://localhost:44346/api/Users`;

    return this.http.put(updateURL, formData)
      .pipe(map( (res: any) => {
        console.log(res);
        return res;
      }));
  }

  
}
