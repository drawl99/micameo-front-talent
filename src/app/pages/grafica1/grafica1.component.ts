import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {


  public labels1: string[] = ['Cameos rechazados', 'Cameos completados', 'Cameos pendientes'];
  public data1 = [
    [25, 30, 15],
  ];



}
