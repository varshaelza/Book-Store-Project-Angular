import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooksByCatId(catId:string|null):any{
    console.log(catId);
    let catIdURL = `https://localhost:44346/api/Books?p_catID=${catId}`;
    return this.http.get(catIdURL)
      .pipe(map( (res: any) => {
        console.log(res);
        return res;
      }));
  }

  
}
