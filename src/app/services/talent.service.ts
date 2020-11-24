import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Talent } from '../models/talento.model';

@Injectable({
  providedIn: 'root'
})
export class TalentService {
  public url: string;
  public urlPrivada: string;
  constructor(private http: HttpClient) { 
    this.url = environment.apiUrl + '/api/talents/';
    this.urlPrivada = environment.apiUrl + '/api/talent/';

  }

  getCurrentTalent():Observable<any>{
    return this.http.get(this.url + 'me');
  }

  update(talent: Talent): Observable<any>{
    // console.log('Talento enviado \n'+ talent);
    
    return this.http.put(this.urlPrivada + talent.user.username, talent);

  }
}
