import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { MachinesComponent } from './components/machine/machines/machines.component';
import { ImprimanteComponent } from './components/imprimantes/imprimante/imprimante.component';
import { TonerComponent } from './components/toner/toner/toner.component';
import { UsersComponent } from './components/users/users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddMachineComponent } from './components/add-machine/add-machine/add-machine.component';
import { AddImprimanteComponent } from './components/add-imprimante/add-imprimante.component';
import { SpareComponent } from './components/spare/spare.component';
import { AccueilComponent } from './components/accueil/accueil.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomePageComponent,
    MachinesComponent,
    ImprimanteComponent,
    TonerComponent,
    UsersComponent,
    AddUserComponent,
    AddMachineComponent,
    AddImprimanteComponent,
    SpareComponent,
    AccueilComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
