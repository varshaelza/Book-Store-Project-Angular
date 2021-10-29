import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public searchTerm : string = '';

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }

  search(event:any){
      this.searchTerm = (event.target as HTMLInputElement).value;
      console.log(this.searchTerm);
      this.cartService.search.next(this.searchTerm);
  }



}