import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ICredentials} from "../../_interfaces/credentials";
import {IToken} from "../../_interfaces/token";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {


  constructor(private httpClient:HttpClient) { }
  x: ICredentials | undefined;

/*
  Mauvaise méthode de récuperation (à changer) in sha Allah
*/
  datalogin(credentials:ICredentials):Observable<IToken>{
    return this.httpClient.post<IToken>(`http://localhost:7070/login?userName=${credentials.userName}&password=${credentials.password}`, credentials);
  }
/*
  getUserByUserName(userName:string){
    return this.httpClient.get(`http://localhost:8070/getUser?userName=${userName}`);
  }

  returnUsername(credentials:ICredentials):string{
    return credentials.userName;
  }*/

}
