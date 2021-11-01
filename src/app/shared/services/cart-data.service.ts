import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  public search = new BehaviorSubject<string>("");
  public ordid:any=1
  public orderid=new BehaviorSubject(this.ordid);
  public usid:any=1
  public userid=new BehaviorSubject(this.usid);
  latestorderid:Observable<any>=this.orderid.asObservable()
  
  latestuserid:Observable<any>=this.userid.asObservable()
  constructor() { }

  
}
