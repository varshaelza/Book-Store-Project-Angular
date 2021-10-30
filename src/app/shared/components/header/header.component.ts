import { Component, OnInit } from '@angular/core';
import { CartDataService } from 'src/app/shared/services/cart-data.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public searchTerm : string = '';

  constructor(private cartService:CartDataService, private menuService:MenuService) { }

  ngOnInit(): void {
  }

  search(event:any){
      this.searchTerm = (event.target as HTMLInputElement).value;
      console.log(this.searchTerm);
      this.cartService.search.next(this.searchTerm);
  }
  loggedIn(){
    return localStorage.getItem('authToken');
  }

  onLogout(){
      this.menuService.adminstatus.next(false);
    localStorage.removeItem('authToken');
  }


}