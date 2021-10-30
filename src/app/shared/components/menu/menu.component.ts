import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {
  userURL: any;
  currentUser: any;
  status = false;
  constructor(private http: HttpClient, private menuService:MenuService, private authService:AuthService) { }

  ngOnInit(): void {
      this.authService.adminstatus.subscribe((val: any) => {
      console.log(val);
      this.status = val;
    });

    this.menuService.adminstatus.subscribe((val: any) => {
      console.log(val);
      this.status = val;
    });
  }

  loggedIn() {
    return localStorage.getItem('authToken');
  }



}
