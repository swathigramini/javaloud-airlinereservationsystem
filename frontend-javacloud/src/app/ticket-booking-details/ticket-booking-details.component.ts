import { Component, OnInit } from '@angular/core';
import { BookTicketService } from '../book-ticket.service';

@Component({
  selector: 'app-ticket-booking-details',
  templateUrl: './ticket-booking-details.component.html',
  styleUrls: ['./ticket-booking-details.component.css']
})
export class TicketBookingDetailsComponent implements OnInit {

  ticketDetails;
  constructor(public service: BookTicketService) { }

  ngOnInit() {
    this.ticketDetails = this.service.ticketDetails;
    console.log(this.ticketDetails);
  }
}
