import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../../core/api/products/models/products-data.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = signal<Product[]>([]);
  cartIsEmpty = computed(() => this.items().length === 0);
  totalCartItems = computed(() => this.items().length);
  totalCartCosts = computed(() => {
    const total = this.items().reduce((acc, item) => acc + item.cost, 0);
    return total.toFixed(2);
  });

  constructor() { }

  public addToCart(itemToAdd: Product) {
    const isInCart = this.items().find(item => item.id === itemToAdd.id)
    if (!isInCart)
      this.items.update(items => [...items, itemToAdd])
  }

  public removeFromCart(itemToRemove: Product) {
    this.items.update(items => items.filter(item => item.id !== itemToRemove.id))
  }

  public clearCart() {
    this.items.set([])
  }
}
