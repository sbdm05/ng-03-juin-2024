import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateOrder } from '../../../core/enums/state-order';
import { Order } from '../../../core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrl: './form-order.component.scss',
})
export class FormOrderComponent {
  // 1 - créer la propriété du form
  public form!: FormGroup;
  // stocker l'enum
  public states = Object.values(StateOrder);

  // Parent/Enfant
  @Input() init!: Order;

  // Enfant/Parent
  @Output() submitted = new EventEmitter();

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
      nbJours: [this.init.nbJours],
      tva: [this.init.tva],
      state: [this.init.state],
      client: [this.init.client],
      comment: [this.init.comment],
      id: [this.init.id],
    });
  }

  public onSubmit() {
    console.log(this.form.value);
    // envoyer le nouvel obj au serveur
    // on envoie le form au parent
    this.submitted.emit(this.form.value);
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
