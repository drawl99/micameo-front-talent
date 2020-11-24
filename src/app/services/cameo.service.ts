import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CameoService {

  url: string;
  constructor(private httClient: HttpClient) { 
    this.url = environment.apiUrl + '';

  }
}
