import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Imprimante } from './components/imprimantes/imprimante/Imprimante';
import { Machine } from './components/machine/Machine';
import { User } from './components/sign-in/user';
import { Spare } from './components/spare/Spare';
import { Toner } from './components/toner/Toner';


@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {
  constructor(private http:HttpClient) { }

  public getUser():Observable<any>  {
    return this.http.get<User[]>('http://localhost:8080/api/v1/users');
  }

  public getMachine():Observable<any>{
    return this.http.get<Machine[]>('http://localhost:8080/api/v1/users/machine');
  }
 
  public addUser(user : User):Observable<User>{
    return this.http.post<User>(`http://localhost:8080/api/v1/users/add`,user);
  }

  public deleteUser(id :number):Observable<User>{
    return this.http.delete<User>(`http://localhost:8080/api/v1/users/delete/${id}`);
  }

  public updateUser(num :number,nom:String , mdp : String , type : String ):Observable<User>{
    return this.http.put<User>(`http://localhost:8080/api/v1/users/update/${num}?nom=${nom}&mdp=${mdp}&type=${type}`,num);
  }

  public addMachine(machine : Machine):Observable<any>{
    return this.http.post<Machine>('http://localhost:8080/api/v1/users/addmachine',machine);
  
  }

  public updateMachine(id :number,nom:String , site : String , nom_reseau : String ,etat : String ,  date_achat : String , fournisseur : String  , garantie : String  ,  modele  : String ,num_serie:String , type:String ):Observable<Machine>{
    return this.http.put<Machine>(`http://localhost:8080/api/v1/users/updatemachine/${id}?utilisateur=${nom}&site=${site}&nom_reseau=${nom_reseau}&etat=${etat}&date_achat=${date_achat}&fournisseur=${fournisseur}&garantie=${garantie}&modele=${modele}&num_serie=${num_serie}&type=${type}`,id);
  }



  public deleteMachine(id :number):Observable<Machine>{
    return this.http.delete<Machine>(`http://localhost:8080/api/v1/users/deletemachine/${id}`);
  }


  public getImprimante():Observable<any>{
    return this.http.get<Imprimante[]>('http://localhost:8080/api/v1/users/getImprimante');
  }

  public deleteImprimante(id :number):Observable<Imprimante>{
    return this.http.delete<Imprimante>(`http://localhost:8080/api/v1/users/deleteImprimante/${id}`);
  }

  public updateImprimante(id :number , site :String , description : String , type_toner:String , garantie:String , modele:String):Observable<Imprimante>{
    return this.http.put<Imprimante>(`http://localhost:8080/api/v1/users/updateImprimante/${id}?site=${site}&description=${description}&type_toner=${type_toner}&garantie=${garantie}&modele=${modele}`,id);
  }

  public getToner():Observable<any>{
    return this.http.get<Toner[]>('http://localhost:8080/api/v1/users/gettoner');
  }

  public addImprimante(imprimante : Imprimante):Observable<any>{
    return this.http.post<Imprimante>('http://localhost:8080/api/v1/users/addimprimante',imprimante);
  }

  public getSpare():Observable<any>{
    return this.http.get<Spare[]>('http://localhost:8080/api/v1/users/getspare');
  }


  public deleteSpare(id :number):Observable<Spare>{
    return this.http.delete<Spare>(`http://localhost:8080/api/v1/users/deletespare/${id}`);
  }



  public updateBlack(num :number):Observable<User>{
    return this.http.put<User>(`http://localhost:8080/api/v1/users/updatetoner/black/${num}`,num);
  }
  public updateMagenta(num :number):Observable<Toner>{
    return this.http.put<Toner>(`http://localhost:8080/api/v1/users/updatetoner/magenta/${num}`,num);
  }
  public updateCyan(num :number):Observable<Toner>{
    return this.http.put<Toner>(`http://localhost:8080/api/v1/users/updatetoner/cyan/${num}`,num);
  }
  public updateYellow(num :number):Observable<Toner>{
    return this.http.put<Toner>(`http://localhost:8080/api/v1/users/updatetoner/yellow/${num}`,num);
  }

  public updateYellowa(num :number):Observable<Toner>{
    return this.http.put<Toner>(`http://localhost:8080/api/v1/users/updatetoner/yellowa/${num}`,num);
  }
  public updateBlacka(num :number):Observable<Toner>{
    return this.http.put<Toner>(`http://localhost:8080/api/v1/users/updatetoner/blacka/${num}`,num);
  }
  public updateCyana(num :number):Observable<Toner>{
    return this.http.put<Toner>(`http://localhost:8080/api/v1/users/updatetoner/cyana/${num}`,num);
  }

  public updateMagentaa(num :number):Observable<Toner>{
    return this.http.put<Toner>(`http://localhost:8080/api/v1/users/updatetoner/magentaa/${num}`,num);
  }
 
  public deleteToner(id :number):Observable<Toner>{
    return this.http.delete<Toner>(`http://localhost:8080/api/v1/users/deletetoner/${id}`);
  }
  public addToner(toner : Toner):Observable<any>{
    return this.http.post<Toner>('http://localhost:8080/api/v1/users/addtoner',toner);
  }

  public addSpare(spare : Spare):Observable<any>{
    return this.http.post<Spare>('http://localhost:8080/api/v1/users/addspare',spare);
  }

}
