import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

    name : String | undefined ; 
    nameCompte ?: String ; 
  constructor() { }
  public admin = true ; 

  public getInfo()
  {
    if(  !(localStorage.getItem('type')=== 'admin')    )
    {
        this.admin = false ; 
    }
    this.name = String(localStorage.getItem('name'))  ;
    this.nameCompte = String(localStorage.getItem('type')) ; 
    console.log("name " , localStorage.getItem("name"))
    console.log("name " , localStorage.getItem("type"))
  
  }


  ngOnInit(): void {
    this.getInfo()
  }

}
