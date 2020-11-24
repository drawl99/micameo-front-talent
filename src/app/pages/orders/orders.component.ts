import { Order } from '../../models/order.model';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public orders: Order[];
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(){
    this.orderService.getOrdersPendientes().subscribe(
      data => {
        console.log(data);
        this.orders = data;
      }
    );
  }

  ouputEmiter(miVar: boolean){
    // console.log("el valor que vino es: ", miVar);
    this.getOrders();
  }

}
