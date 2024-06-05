import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { PageObsComponent } from './pages/page-obs/page-obs.component';
import { SharedModule } from '../shared/shared.module';
import { IconsModule } from '../icons/icons.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormOrderComponent } from './components/form-order/form-order.component';

// on va définir la devise utilisée dans ce module
// ici on importe le fichier OrdersRoutingModule
@NgModule({
  declarations: [
    PageListOrdersComponent,
    PageAddOrderComponent,
    PageEditOrderComponent,
    PageObsComponent,
    FormOrderComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    OrdersRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' }],
})
export class OrdersModule {
  constructor() {
    //console.log('depuis orders module');
  }
}

// pour changer de currency , icion ajoute providers
// pour changer l'emplacement de la devise , on modifie angular.json
// attention - redémarrer le serveur
