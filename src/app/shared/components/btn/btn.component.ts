import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.scss',
})
export class BtnComponent {
  // ici la valeur de label vient du composant parent
  @Input() label!: string;
  // new prop pour style
  @Input() styleBtn!: string;
  @Input() routeInfo!: string;

  constructor() {
    //console.log(this.label); // undefined, trop tôt
  }

  // cycle de vie du composant
  ngOnInit() {
    //console.log(this.routeInfo); // on obtient la valeur
  }

  // faire passer une route
}
