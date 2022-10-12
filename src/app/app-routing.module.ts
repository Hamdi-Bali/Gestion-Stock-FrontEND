import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AddImprimanteComponent } from './components/add-imprimante/add-imprimante.component';
import { AddMachineComponent } from './components/add-machine/add-machine/add-machine.component';
import { AddUserComponent } from './components/add-user/add-user.component';

import { HomePageComponent } from './components/home-page/home-page.component';
import { ImprimanteComponent } from './components/imprimantes/imprimante/imprimante.component';
import { MachinesComponent } from './components/machine/machines/machines.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SpareComponent } from './components/spare/spare.component';
import { TonerComponent } from './components/toner/toner/toner.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path:'',redirectTo:'/sign_in',pathMatch:'full'},
  {path:'accueil',component:AccueilComponent},
  {path:'add_machine',component:AddMachineComponent},
  {path:'add_imprimante',component:AddImprimanteComponent},
  {path:'add_user',component:AddUserComponent},
  {path:'users',component:UsersComponent},
  {path:'toner',component:TonerComponent},
  {path:'imprimantes',component:ImprimanteComponent},
  {path:'machines',component:MachinesComponent},
  {path:'home',component:HomePageComponent},
  {path:'sign_in',component:SignInComponent},
  {path:'spare',component:SpareComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
