import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './errors/pages/page-not-found/page-not-found.component';
import { PageAddOrderComponent } from './orders/pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './orders/pages/page-edit-order/page-edit-order.component';
import { PageListOrdersComponent } from './orders/pages/page-list-orders/page-list-orders.component';

const routes: Routes = [
  // { path : '', component : PageListComponent},
  // { path : 'add', component : PageListComponent},
  // { path : 'edit', component : PageListComponent},
  // { path : 'test', component : PageListComponent}
  //{ path: '', component: PageListOrdersComponent },

  { path: '', redirectTo: '/orders', pathMatch: 'full' },
  { path: 'orders', component: PageListOrdersComponent },
  { path: 'add', component: PageAddOrderComponent },
  { path: 'edit', component: PageEditOrderComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
