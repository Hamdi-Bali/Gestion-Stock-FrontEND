import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceUserService } from 'src/app/service-user.service';
import { User } from './user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],

})
export class SignInComponent implements OnInit {
  router: any;
  public users!: User[]; 
  public verif = false ; 

  constructor(router:Router,private userservice:ServiceUserService) { }
  ngOnInit(): void {
    this.getUsers();
  }
  
public getUsers():void{
  this.userservice.getUser().subscribe(
    (response:any)=>{
      this.users =response ; 
    },
    (error:HttpErrorResponse)=>{alert(error.message);}
  );
}
  onSubmit(form : NgForm)
  {
 
    var test : boolean = false; 
    for(let user of this.users)
    {
      if (!(user.name == form.value.username ) || !(form.value.password == user.mdp))
      {
      }
      else
      {
        test = true ; 
        localStorage.setItem('type',`${user.type}`)
        localStorage.setItem('name',`${user.name}`)
        console.log(localStorage.getItem('type'))
      }
    }
    if(test == false)
    {
      alert("username or password invalid")
    }
    else
    {
      this.verif = true ; 
    }


  }
  goToVotes($myParam: string = ''): void {
    const navigationDetails: string[] = ['/accueil'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }  

}
