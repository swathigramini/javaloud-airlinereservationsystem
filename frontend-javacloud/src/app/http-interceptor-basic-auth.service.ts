import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { HttpHandler, HttpRequest, HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(public service: UserService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let basicAuthHeaderString = localStorage.getItem('token');
    let userName =  localStorage.getItem('authenticatedUser');
    if (basicAuthHeaderString && userName ) {
     req = req.clone({
       setHeaders: {
         Authorization : basicAuthHeaderString
       }
     });
    }
    return next.handle(req);
  }
}
