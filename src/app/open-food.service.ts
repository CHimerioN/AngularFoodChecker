import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OpenFoodService {
  constructor(private http: HttpClient) {}
  getFood(food: any): any {
    return this.http.get(
      `https://pl.openfoodfacts.org/cgi/search.pl?search_terms=${food}&search_simple=1&action=process&json=1`
    );
  }
}
