import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { users } from 'src/datamodels/users.model';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {
  users : users [] =[];
  userName :string;

  constructor(public service: UserService) { }

  ngOnInit() {
    this.users = [
      {
       "ID" : 1,

      "userName":"rajeshwari",
      "emailId":"rajeshwari@gmail.com",
      "role":"Admin",
      "nationality":"Indian",
      "address":"Gandhi Nagar Bangalore",
      "mobile": "9784567289"
      },
      {
        "ID" : 2,
        
       "userName":"Sam",
       "emailId":"Sam@gmail.com",
       "role":"User",
       "nationality":"Indian",
       "address":"Gk Nagar Bangalore",
       "mobile": "9784456799"
       }
    ]
  }
  UserName(){
    if(this.userName != ""){
      this.users=this.users.filter(res=>{
      return res.userName.toLocaleLowerCase().match(this.userName.toLocaleLowerCase());
      });
    }else if(this.userName == ""){
      this.ngOnInit();
    }
  }
}
