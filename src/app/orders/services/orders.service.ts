import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// disponible dans toute l'application
// decorateur
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  // stocker l'url
  private url = 'http://localhost:3011/orders';

  constructor(private http: HttpClient) {}

  // ajouter des méthodes
  public sumUp(a: number, b: number): number {
    return a + b;
  }

  // appel HTTP
  // fetch() avec JS mais pas avec Angular

  public getDatas() {
    return this.http.get(this.url);
  }
}
