import { AuthGuard } from './auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FlightComponent } from './flight/flight.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { TicketBookingDetailsComponent } from './ticket-booking-details/ticket-booking-details.component';
import { AllUserComponent } from './all-user/all-user.component';
import { LogoutComponent } from './logout/logout.component';
import { SuccesfulComponent } from './succesful/succesful.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FlightComponent,
    AddFlightComponent,
    UpdateFlightComponent,
    BookTicketComponent,
    FlightDetailsComponent,
    TicketBookingDetailsComponent,
    AllUserComponent,
    LogoutComponent,
    SuccesfulComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent,canActivate:[AuthGuard],data: { expectedRole: ['user'] } },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'add-flight', component: AddFlightComponent,data: { expectedRole: ['admin'] } },
      { path: 'book-ticket', component: BookTicketComponent, data: { expectedRole: ['user'] } },
      { path: 'update-flight', component: UpdateFlightComponent, data: { expectedRole: ['admin'] } },
      { path: 'all-user', component: AllUserComponent},
      {
        path: 'flight', component: FlightComponent, data: { expectedRole: ['user'] }, children: [
          { path: 'flight-details', component: FlightDetailsComponent }]
      },
      {path: 'home', component: HomeComponent},
      { path: 'ticket-booking-details', component: TicketBookingDetailsComponent},
      {path : 'succesful' , component:SuccesfulComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

