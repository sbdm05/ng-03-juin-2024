import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../../core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrl: './page-list-orders.component.scss',
})
export class PageListOrdersComponent {
  // ici pour stocker le contenu de reponse et replacé par pipe async
  // public tab!: Order[];
  public tab$: Observable<Order[]>;

  // créer un tableau contenant toutes les titres des colonnes
  public headers: string[] = [
    'Action',
    'Type',
    'Client',
    'Nb Jours',
    'Tjm Ht',
    'Total HT',
    'Total TTC',
    'Etat',
  ];

  // injection de dépendances
  // constructor = première méthode qui est déclenchée quand le composant est créé
  constructor(private ordersService: OrdersService) {
    //console.log(this.ordersService.sumUp(1, 2));

    // pour référence, utilisation de pipe async à la place
    // this.ordersService.getDatas().subscribe((reponse) => {
    //   //console.log(reponse);
    //   // afficher reponse dans la page
    //   this.tab = reponse;
    //   console.log(this.tab);
    // });

    this.tab$ = this.ordersService.getDatas();
  }

  public total(val: number, coef: number, tva?: number) {
    console.log('déclenché'); // 3

    if (tva) return val * coef * (1 + tva / 100);
    return val * coef;
  }
}
