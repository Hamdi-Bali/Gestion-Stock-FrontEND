import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceUserService } from 'src/app/service-user.service';
import { User } from '../sign-in/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  ngOnInit(): void {

    this.getUsers();
    this.affich()
  }
  constructor( private userservice:ServiceUserService) {  }

public  users !: User[] ; 
public responseDelete : any
   
  public getUsers():void{
    this.userservice.getUser().subscribe(
      (response:any)=>{
        this.users =response ;
      },
      (error:HttpErrorResponse)=>{alert(error.message);}
    );
  }
  public deleteUser(id : number):void{
    this.userservice.deleteUser(id).subscribe(
      (response:any)=>{
        this.responseDelete =response ;
        this.ngOnInit();
        console.log("User deleted successfuly") ; 
      },
      (error:HttpErrorResponse)=>{alert(error.message);}
    );
  } 
  public updateUser(num : number , nom : String , mdp : String  , type :String ):void{
    this.userservice.updateUser(num ,nom , mdp ,type  ).subscribe(
      (response:any)=>{
        this.responseDelete =response ;
        this.ngOnInit();
      },
      (error:HttpErrorResponse)=>{alert(error.message);}
    );
  } 
private ss !: number; 

public onOpenModalv2(user : User):void
{
const container=document.createElement('main-container')
const button = document.createElement('button') ; 
button.type = 'button' ; 
button.style.display='none'; 
button.setAttribute('data-toggle','modal');

container.appendChild(button) ; 
this.ss = user.num ; 
button.click();

}


 onOpenModal(form:NgForm)
 {
  this.updateUser(this.ss,form.value.nom,form.value.mdp,form.value.type)
 }  


onSubmit(form :NgForm)
{
console.log("here ",form.value.password)
}
  affich(){
      console.log("user = " , this.users )
  }



  public rep : any 

  public addUser(user :User):void{
    this.userservice.addUser(user).subscribe(
      (response:any)=>{
        this.rep = response } ,
        (error:HttpErrorResponse)=>{
          alert(error.message)
      }
      )
  }

public onSubmitUser(addform : NgForm):void{
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

}
