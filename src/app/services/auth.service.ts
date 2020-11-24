import { TalentService } from './talent.service';
import { Talent } from './../models/talento.model';
import { User } from './../models/usuario.model';
import { UserService } from './user.service';
import { LoginForm } from './../interfaces/login-form.interface';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public url: string;
  // public user: User;
  public talent: Talent;
  
  constructor(private http: HttpClient,
    private userService: UserService,
    private talentService: TalentService) {

    this.url = environment.apiUrl + '/api/auth/users';
  }


  isAuth() {

    return this.talentService.getCurrentTalent().pipe(tap((resp: any) => {
      console.log(resp);
      
      const {user, profile_image, description, response_days, price, categories, birthday, phone_number} = resp;
      this.talent = new Talent(profile_image, description, response_days, price, categories, birthday, phone_number,user );
    }), map(resp => true),
    catchError(error => of(false)));
    
    // return this.userService.getCurrentUser().pipe(tap((resp: any) => {
    //   console.log(resp);
    //   const { username, email, first_name, last_name } = resp;
    //   this.user = new User(username, email, first_name, last_name);
      
      
    // }), map(resp => true),
    //   catchError(error => of(false)));


    // const {username, email, first_name, last_name} = data;
    // this.user = new User(username, email, first_name, last_name);
    // this.user.imprimirUsuario();





  }

  login(formData: LoginForm) {
    return this.http.post(`${this.url}/login`, formData).pipe(
      tap((resp: any) => {
        if (resp.is_talent) {
          localStorage.setItem('token', resp.access);
        }

      })
    )
  }

  logOut() {
    localStorage.removeItem('token');
  }
}
