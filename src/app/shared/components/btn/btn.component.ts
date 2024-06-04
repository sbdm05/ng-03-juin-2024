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

  // faire passer une route
}
