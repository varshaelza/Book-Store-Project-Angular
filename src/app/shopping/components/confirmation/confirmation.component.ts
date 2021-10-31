import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styles: [
  ]
})
export class ConfirmationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotopage(page:string)
  {
    this.router.navigate([`${page}`])
  }

}
