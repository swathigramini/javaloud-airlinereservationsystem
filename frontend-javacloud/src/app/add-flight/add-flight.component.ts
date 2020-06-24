import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlightDetailsService } from '../flight-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {
  
  @ViewChild('flightRegisterForm', { static: true}) flightRegisterData: NgForm;

  constructor(public service: FlightDetailsService,public router: Router) { }

  ngOnInit() {
  }
  
  getFlightRegisterData() {
    this.service.flightRegisterRequest(this.flightRegisterData.value).subscribe(resp => {
      console.log('backend resp',resp);
      this.router.navigateByUrl('/update-flight');
    }, err => {
      console.log(err);
    }, () => {
      console.log('add flight request sent');
    });
  }
  }


