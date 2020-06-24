import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  constructor(public http: HttpClient) { }
  // tslint:disable-next-line: member-ordering
  backendURL = 'http://localhost:8082';
  selectedFlight;
  getAllFlightRequest() {
    throw new Error('Method not implemented.');
  }
  flightRegisterRequest(data) {
    return this.http.post(`${this.backendURL}/template/flightRegister`, data);
  }

  getAllFlightsRequest(): any {
    return this.http.get(`${this.backendURL}/template/getAllFlights`);
  }

  updateFlightRequest(data) {
    return this.http.put(`${this.backendURL}/template/updateFlight/${data.id}`, data);
  }

  deleteFlightRequest(data) {
     return this.http.delete(`${this.backendURL}/template/deleteFlight/${data.id}`);
  }

}
