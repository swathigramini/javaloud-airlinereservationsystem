import { Component, OnInit } from '@angular/core';
import { FlightDetailsService } from '../flight-details.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {
  allFlights: FlightDetailsService[];

  constructor(public service: FlightDetailsService, public router: Router) { }

ngOnInit() {
  this.getAllFlights();
}

getAllFlights() {
  this.service.allFlights().subscribe(resp => {
    console.log(resp.allFlights);
    this.allFlights = resp.allFlights;
    console.log('flightDetails component', this.allFlights);
  }, err => {
    console.log(err);
  }, () => {
    console.log('get request is sent');
  });
}
// getUpdateFlight(flight) {
//   console.log(flight);
//   this.service.selectedFlight = flight;
//   this.router.navigateByUrl('/update-flight');
// }

}
