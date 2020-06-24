import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private httpClient: HttpClient) { }

  authenticate(userName, password): any {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(userName + ':' + password) });
    return this.httpClient.get('http://localhost:8080/basicauth', {headers}).pipe(
     map(
       userData => {
        sessionStorage.setItem('userName', userName);
        return userData;
       }
     )

    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('userName');
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('userName');
  }
}
