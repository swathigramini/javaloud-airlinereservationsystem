import { Component, OnInit, ViewChild } from '@angular/core';
import { FlightService } from '../flight.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FlightDetailsService } from '../flight-details.service';
import { homes } from 'src/datamodels/homes.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homes : homes[] =[];
  source :string;
  destination :string;
  
  @ViewChild('searchForm', { static: true }) searchFlightData: NgForm;
  flightDetailsService: any;

  constructor(public service: FlightDetailsService, public router: Router) { }
  flightDetails;

  ngOnInit() {
    this.homes = [
      {
      "ID":1,
  
      "flightName" : "Kingfisher",
      "source":"Kochin",
      "destination" : "Chennai",
      "classType" : "Bussiness",
      "ticketPrice" : "2000"
      },
      {
        "ID":2,
      
      "flightName" : "Indigo",
      "source":"Bangalore",
      "destination" : "Mumbai",
      "classType" : "Economic",
      "ticketPrice" : "1000"
      }
      ];
  }
  Search(){
    if(this.source != ""){
      this.homes=this.homes.filter(res=>{
      return res.source.toLocaleLowerCase().match(this.source.toLocaleLowerCase());
      });
    }else if(this.source == ""){
      this.ngOnInit();
    }
  }
  
  Dest(){
    if(this.destination != ""){
      this.homes=this.homes.filter(res=>{
      return res.destination.toLocaleLowerCase().match(this.destination.toLocaleLowerCase());
      });
    }else if(this.destination == ""){
      this.ngOnInit();
    }
  }
  getSearchFormData() {
    console.log(this.searchFlightData.value);
    this.flightDetailsService.searchFlightRequest(this.searchFlightData.value).subscribe(resp => {
     console.log(resp);
     this.flightDetailsService.flightDetails = resp.flightDetails;
     this.flightDetails = resp.flightDetails;
     console.log(this.flightDetails);
   }, err => {
     console.log(err);
   }, () => {
     console.log('search request sent');
     this.router.navigateByUrl('/Flight-Details');
   });
  }

}
