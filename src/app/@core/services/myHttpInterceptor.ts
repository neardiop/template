import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { KeycloakService } from './keycloack.service';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  authReq: any;
  constructor(
    private keycloakService: KeycloakService
  ) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // if (this.keycloakService.isLoggedIn()) {
    //   return this.getUserToken().pipe(
    //     mergeMap((token) => {
    //       if (token) {
    //         this.authReq = request.clone({
    //           headers: request.headers.set('Access-Control-Allow-Origin', '*')
    //             // .set('Authorization', 'Bearer ' + token)
    //             .set('Content-Type', 'application/json')
    //         });
    //         localStorage.setItem('roles',JSON.stringify(this.keycloakService.getRoles()))
    //       }
    //       return next.handle(request);
    //     }));
    // }
    return next.handle(request);
  }
  getUserToken() {
    const tokenPromise: Promise<string> = this.keycloakService.getToken();
    const tokenObservable: Observable<string> = from(tokenPromise);
    return tokenObservable;
  }
}