import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Order } from '../../../core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrl: './form-order.component.scss',
})
export class FormOrderComponent {
  // 1 - créer la propriété du form
  public form!: FormGroup;
  @Input() init!: Order;

  // 2 - on inject FormBuilder
  constructor(private fb: FormBuilder) {
    console.log(this.init); // ??? undefined
  }

  // cycle de vie du composant
  ngOnInit() {
    console.log(this.init); // ???

    this.form = this.fb.group({
      tjmHt: [this.init.tjmHt],
      typePresta: [this.init.typePresta],
    });
  }
}

// public name!: string;
// créer un objet de type Order
// associer les propriétés aux inputs du form
// public onAdd() {
//   console.log(this.name);
//   // récupérer toutes ces valeurs
//   // placer dans un nouvel obj
//   // envoyer cet objet vers la bdd
// }
