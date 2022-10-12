import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceUserService } from 'src/app/service-user.service';
import { Toner } from '../Toner';

@Component({
  selector: 'app-toner',
  templateUrl: './toner.component.html',
  styleUrls: ['./toner.component.css']
})
export class TonerComponent implements OnInit {

  constructor(private userservice: ServiceUserService) { }

  public Toners !: Toner[];
  public rep: any;

  public getToner(): void {
    this.userservice.getToner().subscribe(
      (response: any) => {
        this.Toners = response
      },
      (error: HttpErrorResponse) => { alert(error.message); }
    );
  }


  public updateBlack(id: number): void {
    this.userservice.updateBlack(id).subscribe(
      (response: any) => {
        this.rep = response;
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => { alert(error.message); }
    );
  }
  public updateMagenta(id: number): void {
    this.userservice.updateMagenta(id).subscribe(
      (response: any) => {
        this.rep = response;
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => { alert(error.message); }
    );
  }
  public updateYellow(id: number): void {
    this.userservice.updateYellow(id).subscribe(
      (response: any) => {
        this.rep = response;
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => { alert(error.message); }
    );
  }
  public updateCyan(id: number): void {
    this.userservice.updateCyan(id).subscribe(
      (response: any) => {
        this.rep = response;
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => { alert(error.message); }
    );
  }

  public updateCyana(id: number): void {
    this.userservice.updateCyana(id).subscribe(
      (response: any) => {
        this.rep = response;
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => { alert(error.message); }
    );
  }
  public updateBlackaa(id: number): void {
    this.userservice.updateBlacka(id).subscribe(
      (response: any) => {
        this.rep = response;
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => { alert(error.message); }
    );
  }
  public updateMagentaa(id: number): void {
    this.userservice.updateMagentaa(id).subscribe(
      (response: any) => {
        this.rep = response;
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => { alert(error.message); }
    );
  }
  public updateYellowa(id: number): void {
    this.userservice.updateYellowa(id).subscribe(
      (response: any) => {
        this.rep = response;
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => { alert(error.message); }
    );
  }


  public searchDeptModele(key: String): void {
    const result: Toner[] = [];

    for (const mach of this.Toners) {
      if (mach.type_toner.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        result.push(mach);
      }
    }
    this.Toners = result;
    if (!key) {
      this.getToner();
    }
  }
  public deleteToner(id: number): void {
    this.userservice.deleteToner(id).subscribe(
      (response: any) => {
        this.rep = response;
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => { alert(error.message); }
    );
  }


  public addToner(form : NgForm): void {
    this.userservice.addToner(form.value).subscribe(
      (response: any) => {
        this.rep = response;
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => { alert(error.message); }
    );
  }
  public admin = true ; 
  public type()
  {
    if(     !(localStorage.getItem('type')=== 'admin')    )
    {
        this.admin = false ; 
    }
  }
  

  ngOnInit(): void {
    this.getToner()
    this.type()
  }

}
