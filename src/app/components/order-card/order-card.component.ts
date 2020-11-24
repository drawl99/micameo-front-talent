import { Order } from './../../models/order.model';
import { OrderService } from './../../services/order.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2'
import { AngularFireStorage } from '@angular/fire/storage';
import { Cameo } from 'src/app/interfaces/cameo.interface';
import { Observable, timer } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ThemeService } from 'ng2-charts';
import { ModalVideoService } from 'src/app/services/modal-video.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent implements OnInit {


  @Input() order: Order;
  
  @Output() outputEmiter = new EventEmitter<boolean>();


  //Cuenta regresiva
  _second = 1000;
  _minute = this._second * 60;
  _hour = this._minute * 60;
  _day = this._hour * 24;
  end: any;
  now: any;
  create: any;
  day: any;
  hours: any;
  minutes: any;
  seconds: any;
  source = timer(0, 1000);
  clock: any;

  constructor(private orderService: OrderService,
    private authService: AuthService,
    private modalService: ModalVideoService) { }

  ngOnInit(): void {
    this.clock = this.source.subscribe(t => {
      this.now = new Date();
      // this.end = new Date('01/01/' + (this.now.getFullYear() + 1) +' 00:00');
      this.create = new Date(this.order.created);
      this.end = new Date(this.order.created);
      this.end.setDate(this.end.getDate() + this.authService.talent.response_days);
      console.log('now: ', this.now);
      
      console.log('create: ', this.create);
      console.log('end: ', this.end);
      
      
      this.showDate();
    });
  }

  showDate(){
    let distance = this.end - this.now;
    this.day = Math.floor(distance / this._day);
    this.hours = Math.floor((distance % this._day) / this._hour);
    this.minutes = Math.floor((distance % this._hour) / this._minute);
    this.seconds = Math.floor((distance % this._minute) / this._second);
  }

  tiempoRestante(){
    const creado = Date.parse(this.order.created);
    const terminado = new Date(this.order.created);
    terminado.setDate(terminado.getDate() + this.authService.talent.response_days);
    const timeDiff = terminado.getTime() - creado;
    const diff = timeDiff/(1000*3600*24);
    console.log(this.order.created);
    console.log(creado);
    console.log('terminado: ', terminado);
    
    
    return Math.floor(diff);
  }
  aceptarOrden() {
    this.orderService.updateOrder(this.order.id, 2).subscribe(
      data => {

      }, error => { },
      () => {
        Swal.fire({
          title: 'ORDEN ACEPTADA',
          text: 'Aceptastes la orden, recuerda completarla en tantos días',
          icon: 'success',
          confirmButtonText: 'Cool'
        });
        this.outputEmiter.emit(true);

      }
    );
  }


  rechazarorden() {
    Swal.fire({
      title: 'Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: '¡Sí, rechazar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.orderService.updateOrder(this.order.id, 3).subscribe(
          data => {

          }, error => { },
          () => {
            Swal.fire(
              'Rechazado!',
              'El cameo ha sido rechazado.',
              'success'
            );
            this.outputEmiter.emit(true);
          }
        );

      }
    })

  }

  

  abrirModal(  ){
    console.log(this.order);
    this.modalService.abrirModal(this.order);
    // this.subirVideo();
    
  }
}
