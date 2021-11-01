import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  public search = new BehaviorSubject<string>("");
  // public ordid:any=0
  // public orderid=new BehaviorSubject(this.ordid);
  // public totAmt:any=0
  // public tot=new BehaviorSubject(this.totAmt);
  // public usid:any=0
  // public userid=new BehaviorSubject(this.usid);
  // latestorderid:Observable<any>=this.orderid.asObservable()
  // latesttot:Observable<any>=this.tot.asObservable()
  // latestuserid:Observable<any>=this.userid.asObservable()
  constructor() { }
  // public setTotal(total:any)
  // {
  //   console.log("reached")
  //   this.tot.next(total);
  //   console.log(this.latesttot)
  // }

}
