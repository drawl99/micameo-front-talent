import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any[] = [
    {
      titulo: 'DASHBOARD',
      icono: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Principal', url: '/'},
        // {titulo: 'Pedidos', url: 'orders'},
        // {titulo: 'Calculadora', url: 'calculadora'},
      ]
    },
    {
      titulo: 'ORDENES',
      icono: 'mdi mdi-book',
      submenu: [
        {titulo: 'Ordenes pendientes', url: 'orders'},
        {titulo: 'Ordenes aceptadas', url: 'orders-accepted'}
      ]
    },
    {
      titulo: 'HERRAMIENTAS',
      icono: 'mdi mdi-wrench',
      submenu: [
        {titulo: 'Calculadora de ganancias', url: 'calculadora'},
        
      ]
    },
  ];
  constructor() { }
}
