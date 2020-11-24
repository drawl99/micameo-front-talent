import { AuthGuard } from './../guards/auth.guard';

import { PagesComponent } from './pages.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';





const routes: Routes = [

    {
        path: 'dashboard',
        component: PagesComponent,
        canActivate: [AuthGuard],
        loadChildren: () => import('./child-routes.module').then( m => m.ChildRoutesModule )
        // children: [
        //   { path: '', component: DashboardComponent, data: { titulo: 'Dashboard' } },
        //   { path: 'grafica1', component: Grafica1Component, data: { titulo: 'Grafica' } },
        //   { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' } },
        //   { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Tema' } },
        //   { path: 'orders', component: OrdersComponent, data: {titulo: 'Pedidos'} },
        //   { path: 'calculadora', component: CalculadoraComponent, data: {titulo: 'Calculadora'} }
    
        // ],

      },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
