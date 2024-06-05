import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../../../core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrl: './page-edit-order.component.scss',
})
export class PageEditOrderComponent {
  // 1 - récupérer l'id dans l'url = ActivatedRoute
  // appel getItemById(id)
  // envoi obj au form

  // stocker l'objet retourné par le serveur
  public obj!: Order; // false

  constructor(
    private activatedRoute: ActivatedRoute,
    private ordersService: OrdersService,
    private router: Router
  ) {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    if (id) {
      // appel au service vers méthode getItemById();
      this.ordersService.getItemById(id).subscribe((data) => {
        console.log(data); // objet retrouvé
        this.obj = data;
      });
    }
  }

  onEdit(obj: Order) {
    console.log(obj);
    // dans le service méthode pour update l'obj
    this.ordersService.update(obj).subscribe((data) => {
      console.log(data);
      // redirection avec Router
      this.router.navigate(['orders']);
    });
  }
}
