import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookTicketService {
  backendURL = 'http://localhost:8082';
  ticketDetails;
  constructor(public http: HttpClient) { }
  bookingFlightsRequest(data) {
    console.log('service', data);
    return this.http.post(`${this.backendURL}/template/bookingFlights`, data);
  }
}
