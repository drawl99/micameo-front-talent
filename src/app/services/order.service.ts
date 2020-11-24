import { Cameo } from './../interfaces/cameo.interface';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public url: string;
  constructor( private http: HttpClient ) { 
    this.url = environment.apiUrl + '/api/orders/'
  }

  public getOrdersPendientes(): Observable<any>{
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${localStorage.getItem('token')}`
    // });

    return this.http.get(this.url+'talent');
  }

  public getOrdersAceptadas(): Observable<any>{
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${localStorage.getItem('token')}`
    // });
    return this.http.get(`${this.url}talent/accept`);
  }

  public updateOrder(orderId: number, respuesta: number){
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${localStorage.getItem('token')}`
    // });
    return this.http.put(`${this.url}talent/${orderId}/`, {order_response: respuesta.toString()} );
  }

  public crearCameo( cameo: Cameo ){
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${localStorage.getItem('token')}`
    // });
    return this.http.post(this.url+'cameo', cameo);
  }

  public cantidadOrdersPendientesYAceptadas(): Observable<any>{
    return this.http.get(`${this.url}talent/pending/`);
  }

  public ordersByOccasions(): Observable<any>{
    return this.http.get(this.url + 'talent-occasion');
  }
}
