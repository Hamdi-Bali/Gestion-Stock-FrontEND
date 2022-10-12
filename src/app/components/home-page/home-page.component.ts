import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }
   public  type : any  ;  
   public admin = true ; 
   public getItem()
   {
    this.type = localStorage.getItem('type') ; 
    if (!(this.type === 'admin'))
    {
      this.admin = false ; 
    }
    console.log("type de compte = " , this.type)
    console.log("admin  = " , this.admin)
   }

  ngOnInit(): void {
    this.getItem() ; 
  }

}
