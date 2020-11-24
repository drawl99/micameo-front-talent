
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { DonaComponent } from './dona/dona.component';
import { OrderCardComponent } from './order-card/order-card.component';
import { ModalVideoComponent } from './modal-video/modal-video.component';
import { BarComponent } from './bar/bar.component';



@NgModule({
  declarations: [
    IncrementadorComponent, 
    DonaComponent, 
    OrderCardComponent, 
    ModalVideoComponent,
    BarComponent
  ],
  exports: [
    IncrementadorComponent,
    DonaComponent,
    OrderCardComponent,
    ModalVideoComponent,
    BarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ]
})
export class ComponentsModule { }
