import { Component, OnInit, ViewChild } from '@angular/core';
import { FlightDetailsService } from '../flight-details.service';

@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.css']
})
export class UpdateFlightComponent implements OnInit {
  router: any;

  constructor(public service: FlightDetailsService) { }

  ngOnInit() {
  }
  
  getUpdatedFlightData(form) {
    console.log(form.value);
    this.service.updateFlightRequest(form.value).subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl('succesful');
    }, err => {
      console.log(err);
    }, () => {
      console.log('update flight request sent');
    });
  }
}
