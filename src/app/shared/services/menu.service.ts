import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  currentUser: any;
  public adminstatus = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) { }

}
