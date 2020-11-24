import { Injectable } from '@angular/core';
import { Cameo } from '../interfaces/cameo.interface';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class ModalVideoService {

  public order: Order;
  private _ocultarModal = true;

  get ocultarModal(){
    return this._ocultarModal;
  }

  abrirModal(order: Order ){
    this.order = order;
    this._ocultarModal = false;
  }

  cerrarModal(){
    this._ocultarModal = true;
  }
  constructor() { }
}
