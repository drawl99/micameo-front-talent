import { ProfileComponent } from './profile/profile.component';
import { AcceptedOrdersComponent } from './accepted-orders/accepted-orders.component';


import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { ComponentsModule } from './../components/components.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

import { CalculadoraComponent } from './calculadora/calculadora.component';
import { OrdersComponent } from './orders/orders.component';
import { BalanceComponent } from './balance/balance.component';
import { WithdrawComponent } from './withdraw/withdraw.component';


@NgModule({
  declarations: [
    DashboardComponent,
    Grafica1Component,
    ProgressComponent,
    PagesComponent,
    AccountSettingsComponent,
    OrdersComponent,
    CalculadoraComponent,
    AcceptedOrdersComponent,
    ProfileComponent,
    BalanceComponent,
    WithdrawComponent

  ],
  exports: [
    DashboardComponent,
    Grafica1Component,
    ProgressComponent,
    PagesComponent,
    ComponentsModule,
    AccountSettingsComponent,
    OrdersComponent,
    CalculadoraComponent,
    AcceptedOrdersComponent,
    ProfileComponent,
    BalanceComponent,
    WithdrawComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ComponentsModule,
    ReactiveFormsModule  
  ]
})
export class PagesModule { }
