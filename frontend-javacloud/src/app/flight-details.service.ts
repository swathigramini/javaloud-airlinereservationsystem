import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightDetailsService {

  backendURL = 'http://localhost:8082';

  constructor(public http: HttpClient) { }

  allFlights: any;
  selectedFlight;
 
  getFlightDetails() {
    throw new Error('Method not implemented.');
  }
  getAllFlights() {
    throw new Error('Method not implemented.');
  }

  flightRegisterRequest(data) {
    console.log('service', data);
    return this.http.post(`${this.backendURL}/template/flightRegister`, data);
  }

  getAllFlightsRequest(data): any {
    return this.http.get(`${this.backendURL}/template/getAllFlights`, data);
  }

  updateFlightRequest(data) {
    return this.http.put(`${this.backendURL}/template/updateFlight/${data.flightId}`, data);
  }

  deleteFlightRequest(data) {
     return this.http.delete(`${this.backendURL}/template/deleteFlight/${data.flightId}`);
  }

}
