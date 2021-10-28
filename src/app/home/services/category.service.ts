import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient){}//private http: HttpClient//) { }

  getDetailsByCatID():any{
     let catIdUrl= `https://localhost:44346/Api/Category`;
     return this.http.get(catIdUrl)
     .pipe(map( (res: any) => {      
       return res;
     }));
  }
}
