import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceptedOrdersComponent } from './accepted-orders/accepted-orders.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { BalanceComponent } from './balance/balance.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import { ProgressComponent } from './progress/progress.component';
import { WithdrawComponent } from './withdraw/withdraw.component';


const childRoutes: Routes = [

    { path: '', component: DashboardComponent, data: { titulo: 'Dashboard' } },
    { path: 'grafica1', component: Grafica1Component, data: { titulo: 'Grafica' } },
    { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' } },
    { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Tema' } },
    { path: 'orders', component: OrdersComponent, data: { titulo: 'Pedidos por aceptar' } },
    { path: 'orders-accepted', component: AcceptedOrdersComponent, data: { titulo: 'Pedidos por finalizar' } },
    { path: 'calculadora', component: CalculadoraComponent, data: { titulo: 'Calculadora' } },
    { path: 'profile', component: ProfileComponent, data: {titulo: 'Perfil de usuario'}},
    {path: 'balance', component: BalanceComponent, data: {titulo: 'Mi balance'}},
    {path: 'withdraw', component: WithdrawComponent, data: {titulo: 'Retiro de dinero'}}
]

@NgModule({
    imports: [RouterModule.forChild(childRoutes)],
    exports: [RouterModule]
})
export class ChildRoutesModule { }