import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceUserService } from 'src/app/service-user.service';
import { User } from '../sign-in/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent  {

  constructor(private userservice:ServiceUserService) { }
  public user1 !: User ; 
  public rep : any 

  public addUser(user :User):void{
    this.userservice.addUser(user).subscribe(
      (response:any)=>{
        this.rep = response }
        ,
        (error:HttpErrorResponse)=>{
          alert(error.message)
      }
      )
  }

public onSubmit(addform : NgForm):void{
  this.userservice.addUser(addform.value).subscribe(
    (Response:User)=>{
      console.log(Response)
      this.ngOnInit();
    },
    (error:HttpErrorResponse)=>{
      alert(error.message)
    }
  )  
}


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


  ngOnInit() {
    this.ngOnInit();
    this.getItem();
  }
  

}
