import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceUserService } from 'src/app/service-user.service';
import { Imprimante } from './Imprimante';

@Component({
  selector: 'app-imprimante',
  templateUrl: './imprimante.component.html',
  styleUrls: ['./imprimante.component.css']
})
export class ImprimanteComponent implements OnInit {

  constructor(private userservice:ServiceUserService) { }
  imprimantes !: Imprimante[] ; 

  resp : any ; 
  private ss !: number ; 

  public getImprimante():void{
    this.userservice.getImprimante().subscribe(
      (response:any)=>{
        this.imprimantes =response
        console.log(typeof(JSON.parse(response[0].etat) ) , "value = ",response[0].etat);
    },
      (error:HttpErrorResponse)=>{alert(error.message);}
    );
  }


  public deleteImprimante(id : number):void{
    this.userservice.deleteImprimante(id).subscribe(
      (response:any)=>{
        this.resp =response ;
        this.ngOnInit();
        console.log("Imprimante successfuly deleted") ; 
      },
      (error:HttpErrorResponse)=>{alert(error.message);}
    );
  } 

  public updateImprimante(id : number , site : String , description : String,type_toner : String , garantie:String , modele:String  ):void{
    this.userservice.updateImprimante(id ,site , description,type_toner,garantie,modele).subscribe(
      (response:any)=>{
        this.resp =response ;
        this.ngOnInit();
      },
      (error:HttpErrorResponse)=>{alert(error.message);}
    );
  } 

public getId(imp : Imprimante):void{
this.ss = imp.num ; 
}

  onUpdate(form : NgForm)
  {
        this.updateImprimante(this.ss,form.value.site,form.value.description,form.value.type_toner,form.value.garantie,form.value.modele) ;
        this.ngOnInit();
  }



public searchDeptNum(key:String):void{
  const result: Imprimante[]=[];

  for(const mach of this.imprimantes){
    if(mach.num_serie.toLowerCase().indexOf(key.toLowerCase())!==-1){
      result.push(mach);
    }    
  }
  this.imprimantes=result;
  if(!key){
    this.getImprimante();
}
}


public searchDeptModele(key:String):void{
  const result: Imprimante[]=[];

  for(const mach of this.imprimantes){
    if(mach.modele.toLowerCase().indexOf(key.toLowerCase())!==-1){
      result.push(mach);
    }    
  }
  this.imprimantes=result;
  if(!key){
    this.getImprimante();
}
}
public searchDeptSite(key:String):void{
  const result: Imprimante[]=[];

  for(const mach of this.imprimantes){
    if(mach.site.toLowerCase().indexOf(key.toLowerCase())!==-1){
      result.push(mach);
    }    
  }
  this.imprimantes=result;
  if(!key){
    this.getImprimante();
}
}
public searchDeptGarantie(key:String):void{
  const result: Imprimante[]=[];

  for(const mach of this.imprimantes){
    if(mach.garantie != null ){
    if(mach.garantie.toLowerCase().indexOf(key.toLowerCase())!==-1){
      result.push(mach);
    }    
  }
  }
  this.imprimantes=result;
  if(!key){
    this.getImprimante();
}
}
public searchDeptType(key:String):void{
  const result: Imprimante[]=[];

  for(const mach of this.imprimantes){
    if(mach.type_toner.toLowerCase().indexOf(key.toLowerCase())!==-1){
      result.push(mach);
    }    
  }
  this.imprimantes=result;
  if(!key){
    this.getImprimante();
}
}
 public admin = true ; 
 public ff = false ; 
public type()
{
  if(     !(localStorage.getItem('type')=== 'admin')    )
  {
      this.admin = false ; 
  }
  
}

public refresh()
{
    this.getImprimante()
}

ngOnInit(): void {
  this.getImprimante()
  this.type()
}
 
}
