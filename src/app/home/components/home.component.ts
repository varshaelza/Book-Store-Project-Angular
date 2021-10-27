import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categoryList :any[]=[];

  constructor(private catService: CategoryService){}//private userService: CategoryService , private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    // let id = this.route.snapshot.paramMap.get('p_catID');
    this.catService.getDetailsByCatID()
    .subscribe( (res: any) => {
      console.log(res);
      this.categoryList = res;
    });
  }
  

}
