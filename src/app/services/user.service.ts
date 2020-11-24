import { User } from './../models/usuario.model';
import { environment } from './../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url: string;
  public user: User;
  constructor(private http: HttpClient) { 
    this.url = environment.apiUrl + '/api/users/';
  }

  getCurrentUser(): Observable<any>{
    return this.http.get(this.url + 'me');
  }

  updateUser(user: User): Observable<any>{
    return this.http.patch(this.url + user.username+'/', user);
  }


}
