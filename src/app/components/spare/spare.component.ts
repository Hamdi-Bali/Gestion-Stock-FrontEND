import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceUserService } from 'src/app/service-user.service';
import { Spare } from './Spare';
import { SpareInfo } from './SpareInfo';

@Component({
  selector: 'app-spare',
  templateUrl: './spare.component.html',
  styleUrls: ['./spare.component.css']
})
export class SpareComponent implements OnInit {

  constructor(private userservice: ServiceUserService) { }

  public spares !: Spare[] 
  ngOnInit(): void {
    this.getSpare();
    this.type()
  }


  public getSpare(): void {
    this.userservice.getSpare().subscribe(
      (response: any) => {
        this.spares = response;
      },
      (error: HttpErrorResponse) => { alert(error.message); }
    );
  }


  public findModele(modele: String): boolean {
    let exist = false;
    for (let spareinfo of this.spareinfo) {
      if (modele == spareinfo.getModele()) {
        exist = true;
      }
    }
    return exist;
  }


   public spareinfo !: SpareInfo[];

  public initSpareinfo(): void {

    for (let spare of this.spares) {
      if (this.findModele(spare.modele) === false) {
        this.spareinfo.push(new SpareInfo(spare.modele, 1))
      }
    }
  }

  public Quantite(): void {
    for (let item of this.spareinfo) {
      for (let spare of this.spares) {
        if (item.getModele() == spare.modele) {
          item.SetQte(item.getQte() + 1)
        }
      }
    }
  }



  public searchDeptNum(key:String):void{
    const result: Spare[]=[];
    for(const mach of this.spares){
      if(mach.num_serie.toLowerCase().indexOf(key.toLowerCase())!==-1){
        result.push(mach);
      }    
    }
    this.spares=result;
    if(!key){
     this.getSpare();
  }
  }


  rep : any ; 
  public  lastLength = 0 ; 
  public searchDeptType(key:String): void {
    const result: Spare[]=[];

    for(const mach of this.spares){
      if(mach.type.toLowerCase().indexOf(key.toLowerCase())!==-1){
        result.push(mach);
      }    
    }

    this.spares=result;

    if(!key)
    {
      this.getSpare();
    }
  }


  public addSpare(form : NgForm): void {
    this.userservice.addSpare(form.value).subscribe(
      (response: any) => {
        this.rep = response ; 
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => { alert(error.message); }
    );
  }
  public deleteSpare(id : number): void {
    this.userservice.deleteSpare(id).subscribe(
      (response: any) => {
        this.rep = response ; 
      this.ngOnInit()
      },
      (error: HttpErrorResponse) => { alert(error.message); }
    );
  }


  public searchDeptModele(key:String):void{
    const result: Spare[]=[];
  
    for(const mach of this.spares){
      if(mach.modele.toLowerCase().indexOf(key.toLowerCase())!==-1){
        result.push(mach);
      }    
    }
    this.spares=result;
    if(!key){
     this.ngOnInit()
  }
  }
  public admin = true ; 
  public type()
  {
    if(     !(localStorage.getItem('type')=== 'admin')    )
    {
        this.admin = false ; 
    }
  }

}
