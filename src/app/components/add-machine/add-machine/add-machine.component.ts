import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceUserService } from 'src/app/service-user.service';
import { Machine } from '../../machine/Machine';

@Component({
  selector: 'app-add-machine',
  templateUrl: './add-machine.component.html',
  styleUrls: ['./add-machine.component.css']
})
export class AddMachineComponent implements OnInit {

 public refresh = false ; 

  constructor(private userservice:ServiceUserService) { }
   public rep : any ; 
  public addMachine(){}

  public addUser(machine :Machine):void{
    this.userservice.addMachine(machine).subscribe(
      (response:any)=>{
        this.rep = response }
        ,
        (error:HttpErrorResponse)=>{
          alert(error.message)
      }
      )
  }
  public onSubmit(addform : NgForm):void{
    this.userservice.addMachine(addform.value).subscribe(
      (Response:Machine)=>{
        console.log(Response)
        this.refresh = true ; 
        localStorage.setItem('refresh',`${this.refresh}`)
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
