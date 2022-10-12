import { NgClass } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceUserService } from 'src/app/service-user.service';
import { Machine } from '../Machine';
import { MachineClass } from './MachineClass';
@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.css']
})
export class MachinesComponent implements OnInit {

  resp: any;

  constructor(private userservice: ServiceUserService) { }
  testEtatTrue = "true";
  testEtatFalse = "false";
  mach !: Machine[];
  public nb: Number = 0;

  ngOnInit(): void {
    this.getMachine()
    this.typeC();
    this.addInfo();

  }
  public machine !: Machine[];
  public getMachine(): void {
    this.userservice.getMachine().subscribe(
      (response: any) => {
        this.machine = response
        localStorage.setItem('MachineNumber', response.length)
       
      },
      (error: HttpErrorResponse) => { alert(error.message); }
    );
  }

  onSubmit(form: NgForm) {

  }
  public admin = true;
  public ff = false ; 

  public typeC() {
    if (!(localStorage.getItem('type') === 'admin')) {
      this.admin = false;
    }
    if(<boolean><unknown>localStorage.getItem('refresh')==true)
    {
      this.getMachine()
      localStorage.setItem('refresh',`${this.ff}`)
    }
  }


  onOpenModal(form: NgForm, id: number) {
    console.log("id a update = ", id)
    this.userservice.updateMachine(id, form.value.utilisateur, form.value.site, form.value.nom_reseau, form.value.etat, form.value.date_achat, form.value.fournisseur, form.value.garantie, form.value.modele, form.value.num_serie,form.value.type);
  }

  public updateMachine(id: number, nom: String, site: String, nom_reseau: String, etat: String, date_achat: String, fournisseur: String, garantie: String, modele: String, num_serie: String , type:String): void {
    this.userservice.updateMachine(id, nom, site, nom_reseau, etat, date_achat, fournisseur, garantie, modele, num_serie,type).subscribe(
      (response: any) => {
        this.resp = response;
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => { alert(error.message); }
    );
  }

  public deleteMachine(id: number): void {
    this.userservice.deleteMachine(id).subscribe(
      (response: any) => {
        this.resp = response;
        this.ngOnInit();
        console.log("machine successfuly deleted");
      },
      (error: HttpErrorResponse) => { alert(error.message); }
    );
  }

  onUpdateMachine(form: NgForm) {
    this.updateMachine(this.use, form.value.utilisateur, form.value.site, form.value.nom_reseau, form.value.etat, form.value.date_achat, form.value.fournisseur, form.value.garantie, form.value.modele, form.value.num_serie , form.value.type)
  }


  public searchDept(key: String): void {
    const result: Machine[] = [];

    for (const mach of this.machine) {
      if (mach.nom_reseau.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        result.push(mach);
      }
    }
    this.machine = result;
    if (!key) {
      this.getMachine();
    }
  }
  

  public searchDeptType(key: String): void {
    const result: Machine[] = [];
    console.log("type = " , )
    for (const mach of this.machine) {
        if(mach.type != null){
      if (mach.type.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        result.push(mach);
      }
    }
    }
    this.machine = result;
    if (!key) {
      this.getMachine();
    }
  }

  public searchDeptSite(key: String): void {
    const result: Machine[] = [];

    for (const mach of this.machine) {
      if (mach.site.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        result.push(mach);
      }
    }
    this.machine = result;
    if (!key) {
      this.getMachine();
    }
  }



  public searchDeptNom(key: String): void {
    const result: Machine[] = [];

    for (const mach of this.machine) {
      if (mach.utilisateur.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        result.push(mach);
      }
    }
    this.machine = result;
    if (!key) {
      this.getMachine();
    }
  }


  public searchDeptFour(key: String): void {
    const result: Machine[] = [];

    for (const mach of this.machine) {
      if(mach.fournisseur != null){
      if (mach.fournisseur.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        result.push(mach);
      }
    }
    }
    this.machine = result;
    if (!key) {
      this.getMachine();
    }
  }
  public searchDeptNum(key: String): void {
    const result: Machine[] = [];

    for (const mach of this.machine) {
      if(mach.num !=  null){
      if (mach.num.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        result.push(mach);
      }
    }
    }
    this.machine = result;
    if (!key) {
      this.getMachine();
    }
  }

  public searchDeptModele(key: String): void {
    const result: Machine[] = [];

    for (const mach of this.machine) {
    
      if (mach.nom.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        result.push(mach);
      }
    }
    this.machine = result;
    if (!key) {
      this.getMachine();
    }
  }


  public searchDeptDateAchat(key: String): void {
    const result: Machine[] = [];

    for (const mach of this.machine) {
      if(mach.date_achat != null ){
      if (mach.date_achat.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        result.push(mach);
      }
    }
    }
    this.machine = result;
    if (!key) {
      this.getMachine();
    }
  }


  private use !: number;
  public onOpenModalv2(mach: Machine, mode: String): void {
    const container = document.createElement('main-container')
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'Edit') {
      button.setAttribute('data-target', '#EditMachineModal')
    }
    container.appendChild(button);
    console.log("id  = ", mach.id)
    this.use = mach.id;
    button.click();
  }

  ma: MachineClass[] = []

  public addInfo() {
    let etat = 0;

    console.log("ma = ", this.ma)
  }
  public refresh()
  {
    this.ngOnInit()
  }


}


