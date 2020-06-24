import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  backendURL = 'http://localhost:8082';
  userName;
  role;
  constructor(public http: HttpClient) { }
  registerRequest(data) {
    console.log('service', data);
    return this.http.post(`${this.backendURL}/template/register`, data);
  }

  loginRequest(data): any {
    return this.http.post(`${this.backendURL}/login`, data);
  }

  logoutRequest(data): any {
    return this.http.post(`${this.backendURL}/logout`, data);
  }


  getAllUsersRequest() {
    return this.http.get(`${this.backendURL}/template/getAllUsers`);
  }

  getUserRequest(): any {
    return this.http.get(`http://localhost:8082/template/getUser/`  + this.userName);
  }
}