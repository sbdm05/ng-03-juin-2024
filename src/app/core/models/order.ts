import { StateOrder } from '../enums/state-order';
import { OrderI } from '../interfaces/order-i';

export class Order implements OrderI {
  tjmHt = 1200;
  nbJours = 1;
  tva = 20;
  state = StateOrder.OPTION;
  typePresta!: string;
  client!: string;
  comment!: string;
  id!: number;
  constructor(obj?: Partial<Order>) {
    // on fusionner obj avec this
    if (obj) {
      Object.assign(this, obj);
    }
  }
}

// new Order({});

// ?  permet de passer un obj de type Order ou aucun obj
// et si on passe un objet partiel, on utilise Partial<Order>
