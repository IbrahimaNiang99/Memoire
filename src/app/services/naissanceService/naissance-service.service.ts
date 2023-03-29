import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Naissance } from 'src/app/dashboard/home/Naissance/declaration-naiss/Naissance';

@Injectable({
  providedIn: 'root'
})
export class NaissanceServiceService {

  baseUrl = "http://localhost:7070/";

  constructor(private http:HttpClient) { }

  newDeclaration(naissance:Naissance){
    return this.http.post(this.baseUrl+"naissance/ajout", naissance).subscribe(res=>{}) ;
  }

  listeNaissance(){
    return this.http.get(this.baseUrl+"naissance/liste");
  }

  getById(id:number){
    return this.http.get(this.baseUrl+"naissance/getById/"+id);
  }

  listeRegistre(){
    return this.http.get(this.baseUrl+"registre/liste")
  }
}


