import { Component, inject, OnInit, signal } from '@angular/core';
import { Product } from '../../../../../core/api/products/models/products-data.model';
import { ProductsService } from '../../../../../core/api/products/service/products.service';
import { Router } from '@angular/router';
import { CartService } from '../../../../../services/cart/cart.service';
import { JsonPipe } from '@angular/common';
import { SettingsService } from '../../../../../services/settings/settings.service';

@Component({
  selector: 'app-home-user',
  imports: [JsonPipe],
  templateUrl: './home-user.component.html',
  styleUrl: './home-user.component.css'
})
export default class HomeUserComponent implements OnInit {
  settingsService = inject(SettingsService);
  public products = signal<Product[]>([]);
  public cartItems = signal<Product[]>([]);

  constructor(
    private productService: ProductsService,
    private router: Router,
    public cartService: CartService) {
      
      
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.items;
    this.productService.getProducts().subscribe((response) => {
      this.products.set(response);
    });
    
  }

}
