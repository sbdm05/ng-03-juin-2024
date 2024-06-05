import { StateOrder } from '../enums/state-order';
import { OrderI } from '../interfaces/order-i';

// ici on impléménte l'interface
// objectif du model = fixer des valeurs par défaut

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

//const obj = new Order({tjmHt:2000});

// ?  permet de passer un obj de type Order ou aucun obj
// et si on passe un objet partiel, on utilise Partial<Order>
