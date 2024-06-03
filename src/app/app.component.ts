import { Component } from '@angular/core';

// decorateur
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // ici c'est une propriété
  public title = 'crm';
  public open = false;

  // créer une méthode pour ouvrir ou fermer la nav
  public onClick() {
    console.log(this.open); // affichage dans la console du navigateur
    // inverser la valeur de this.open
    this.open = !this.open;
    console.log(this.open); // affichage dans la console du navigateur
  }
}
