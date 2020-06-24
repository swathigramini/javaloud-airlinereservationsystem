import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { combineAll } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm', { static: true }) loginData: NgForm;

  constructor(public service: UserService, public router: Router) { }

  ngOnInit() {
  }

  getLoginCredential() {
    this.service.loginRequest(this.loginData.value).subscribe(resp => {
      console.log(resp);
      this.service.userName = this.loginData.value.userName;
      localStorage.setItem('user', JSON.stringify(resp));
      this.getUserByUserName();
        this.router.navigateByUrl('/home');
      }, err => {
      console.log(err);
    }, () => {
      console.log('login request is gone');
    });
  }

  getUserByUserName() {
    this.service.getUserRequest().subscribe(resp => {
      console.log(resp);
      console.log(resp.userList[0].role);
      this.service.role = resp.userList[0].role;
    }, err => {
      console.log(err);
    }, () => {
      console.log('get user request');
    });
  }

}
