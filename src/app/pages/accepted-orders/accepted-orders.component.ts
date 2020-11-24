import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';

import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-accepted-orders',
  templateUrl: './accepted-orders.component.html',
  styles: [
  ]
})
export class AcceptedOrdersComponent implements OnInit, OnDestroy {
  public orders: Order[];
  public sub: Subscription;
  constructor(private orderService: OrderService,
              ) { }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.getOrders();
  }


  getOrders(){
    this.sub = this.orderService.getOrdersAceptadas().subscribe(
      data => {
        this.orders = data;
        console.log(this.orders);
        
      }
    );
  }

  ouputEmiter(miVar: boolean){
    // console.log("el valor que vino es: ", miVar);
    this.getOrders();
  }


}
