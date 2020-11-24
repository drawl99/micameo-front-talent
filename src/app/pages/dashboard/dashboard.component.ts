import { Balance } from './../../models/balance.model';
import { BalanceService } from './../../services/balance.service';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  //Data del grafico de pastel
  public labels1: string[] = [];
  public data1 = [
    [],
  ];

  //Data del grafico de barras
  public labels2: string[] = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
  public data2 = [
    { data: [65, 59, 80, 81, 56, 55, 40, 32, 16, 22, 48, 2], label: 'Ventas por mes' },
  ];

  public balance: Balance;
  public total = 0;
  public ocassions = [];
  public resp = {
    ordenes_pendientes: 0,
    odenes_completadas: 0
  };
  constructor(private orderService: OrderService,
              private balanceService: BalanceService) { }

  ngOnInit(): void {
    this.totalOrdersPendientesAceptadas();
    
  }

  totalOrdersPendientesAceptadas(){
    this.orderService.cantidadOrdersPendientesYAceptadas().subscribe(
      data => {
        this.resp = data;
        
        console.log(this.resp);
        
      }, error => {
        console.log(error);
        
      }, () => {
        this.ordenesPorOcasiones();
      }
    );
  }

  ordenesPorOcasiones(){
    this.orderService.ordersByOccasions().subscribe(
      data => {
        this.ocassions = data;
        console.log(this.ocassions);
        
        this.ocassions.forEach(occasion => {
          this.labels1.push(occasion.occasion__occasion_name);
          this.data1[0].push(occasion.total_order);
          this.total += occasion.total_order;
        }); 
        this.getBalance();
      }, err => {},
      () => {
        
      }
    );
  }

  getBalance(){
    this.balanceService.getBalance().subscribe(
      data => {
        this.balance = data;
        console.log(this.balance);
        
      }
    );
  }

}
