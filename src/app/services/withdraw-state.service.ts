import { StateWithdraw } from './../interfaces/state-withdraw.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WithdrawStateService {

  public listState: StateWithdraw[];
  constructor() { 
    this.listState = [
      {id: 1, name: 'PENDIENTE'},
      {id: 2, name: 'PAGADA'},
      {id: 3, name: 'RECHAZADA'}
    ];
  }

  public findAll(): StateWithdraw[]{
    return this.listState;
  }
}
