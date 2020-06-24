import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from '../user.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {

  role;
  constructor(public userService: UserService, public route: Router) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.role = this.userService.role;
  }

  logout() {
    localStorage.clear();
    this.role = undefined;
    this.userService.role = undefined;
  }

}
