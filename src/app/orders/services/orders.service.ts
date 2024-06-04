import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../core/models/order';

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

  public getDatas(): Observable<Order[]> {
    // ici on type ce que nous retourne l'api
    return this.http.get<Order[]>(this.url);
  }
}
