import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../../../core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrl: './page-add-order.component.scss',
})
export class PageAddOrderComponent {
  // ici on créer un nouvel objet
  public obj: Order = new Order();

  constructor(private ordersService: OrdersService, private router: Router) {}

  public onAdd(obj: Order) {
    console.log(obj); // obj vient du composant enfant app-form-order
    // appel au service avec la méthode add()
    this.ordersService.add(obj).subscribe((data) => {
      console.log(data);
      // rediriger avec Router
      this.router.navigate(['orders']);
    });

    // rediriger trop tôt
  }
}
