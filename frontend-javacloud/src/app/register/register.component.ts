import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerForm', { static: true }) registerData: NgForm;

  constructor(public service: UserService, public router: Router) { }

  ngOnInit() {
  }

  getRegisterUserDate() {
    this.service.registerRequest(this.registerData.value).subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl('/login');
    }, err => {
      console.log(err);
    }, () => {
      console.log('register request sent');
    });
  }

}
