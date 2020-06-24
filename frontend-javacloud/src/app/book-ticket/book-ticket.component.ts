import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { BookTicketService } from '../book-ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {
  @ViewChild('bookTicketForm', { static: true }) bookTicketData: NgForm;

  constructor(public service: BookTicketService,public router: Router) { }

  ngOnInit() {
  }
      
  getBookTicketData() {
    console.log(this.bookTicketData.value);
    this.service.bookingFlightsRequest(this.bookTicketData.value).subscribe(resp => {
      console.log(resp);
      this.service.ticketDetails = this.bookTicketData.value;
      this.router.navigateByUrl('ticket-booking-details');
    }, err => {
      console.log(err);
    }, () => {
      console.log('book ticket request sent');
    });
  }
}
