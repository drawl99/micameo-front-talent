import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class InterceptorService implements HttpInterceptor {
    constructor() {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = localStorage.getItem('token');
        let reqClone = req;
        const headers = new HttpHeaders({
            Authorization: 'Bearer ' + token
        });

        if (token) {
            reqClone = req.clone({
                headers
            });
        }

        return next.handle(reqClone);
    }
}