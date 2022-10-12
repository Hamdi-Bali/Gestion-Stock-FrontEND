import { NgForOf } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceUserService } from 'src/app/service-user.service';
import { Imprimante } from '../imprimantes/imprimante/Imprimante';

@Component({
  selector: 'app-add-imprimante',
  templateUrl: './add-imprimante.component.html',
  styleUrls: ['./add-imprimante.component.css']
})
export class AddImprimanteComponent implements OnInit {

  constructor(private userservice:ServiceUserService) { }
  rep : any ; 

  public addUser(imprimante :Imprimante):void{
    this.userservice.addImprimante(imprimante).subscribe(
      (response:any)=>{
        this.rep = response }
        ,
        (error:HttpErrorResponse)=>{
          alert(error.message)
      }
      )
  }
  public refresh = false ; 

  public onSubmit(addform : NgForm):void{
    this.userservice.addImprimante(addform.value).subscribe(
      (Response:Imprimante)=>{
        this.refresh = true ; 
        localStorage.setItem('refreshImprimante',`${this.refresh}`)
        this.ngOnInit();
      },
      (error:HttpErrorResponse)=>{
        alert(error.message)
      }
    )  
  }
  


  ngOnInit(): void {
  }

}
