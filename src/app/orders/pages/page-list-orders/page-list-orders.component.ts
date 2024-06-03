import { Component } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrl: './page-list-orders.component.scss',
})
export class PageListOrdersComponent {
  // injection de dépendances
  constructor(private ordersService: OrdersService) {
    console.log(this.ordersService.sumUp(1, 2));
    this.ordersService.getDatas().subscribe((reponse) => {
      console.log(reponse);
      // afficher reponse dans la page
    });
  }
}
