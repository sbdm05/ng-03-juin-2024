import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-obs',
  templateUrl: './page-obs.component.html',
  styleUrl: './page-obs.component.scss',
})
export class PageObsComponent {
  // créer un observable
  // ajouter des observers

  observable = new Observable((obs) => {
    // ici ce sont les valeurs renvoyées par l'observable
    obs.next(1);
    obs.next(2);
    obs.next(Math.random());

    // appel fetch(url)
    // récuperer json
    // convertit json en js
    // .next([data])
  });

  constructor() {
    // déclencher l'observable
    // premier observer
    this.observable.subscribe((data) => {
      console.log(data, 'premier obs');
    });

    // deuxième observer
    this.observable.subscribe((data) => {
      console.log(data, 'deuxième obs');
    });
  }
}
