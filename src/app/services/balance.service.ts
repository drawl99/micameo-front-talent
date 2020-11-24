import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {
  url: string;
  constructor(private httClient: HttpClient) { 
    this.url = environment.apiUrl + '/api/balance/';
  }

  public getBalance():Observable<any>{
    return this.httClient.get(this.url);
  }

  public getWithdraws(): Observable<any>{
    return this.httClient.get(this.url+'withdraw');
  }

  public withdraw(monto: number): Observable<any>{
    return this.httClient.post(this.url+'withdraw', {amount: monto});
  }
}
