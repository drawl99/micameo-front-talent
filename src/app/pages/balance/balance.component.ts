import { WithdrawStateService } from './../../services/withdraw-state.service';
import { Withdraw } from './../../models/withdraw.model';
import { Component, OnInit } from '@angular/core';
import { Balance } from 'src/app/models/balance.model';
import { BalanceService } from 'src/app/services/balance.service';
import { StateWithdraw } from 'src/app/interfaces/state-withdraw.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styles: [
  ]
})
export class BalanceComponent implements OnInit {

  public balance: Balance;
  public withdraws: Withdraw [];
  public listState: StateWithdraw[];
  constructor(private balanceService: BalanceService,
              private  withdrawStateService: WithdrawStateService,
              private router: Router) { }

  ngOnInit(): void {
    this.getStates();
    this.getBalance();
  }

  getBalance(){
    this.balanceService.getBalance().subscribe(
      data => {
        this.balance = data;
        console.log(this.balance);
        
      }, err => {

      }, () => {
        setTimeout(()=>{
          this.getWithdraws();
        }, 1000)
        
      }
    );
  }

  getWithdraws(){
    this.balanceService.getWithdraws().subscribe(
      data => {
        this.withdraws = data;
        console.log(this.withdraws);
        
      }
    );
  }
  getStates(){
    this.listState = this.withdrawStateService.findAll();
  }

  retirar(){
    this.router.navigateByUrl('dashboard/withdraw');
  }
}
