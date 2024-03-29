import { Injectable } from '@angular/core';
import { Product } from './products';
@Injectable()
export class CartService {
  constructor() {}
  items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
