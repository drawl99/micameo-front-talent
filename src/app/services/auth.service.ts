import { LoginForm } from './../interfaces/login-form.interface';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  public url: string;

  constructor( private http: HttpClient ) { 
    this.url = environment.apiUrl + '/api/auth/users';
  }

  login( formData: LoginForm ){
    return this.http.post(`${this.url}/login`, formData).pipe(
      tap( (resp: any) => {
        localStorage.setItem('token', resp.access)
      } )
    )
  }
}
