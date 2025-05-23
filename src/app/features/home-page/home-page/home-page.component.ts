import { JsonPipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../../../core/api/products/models/products-data.model';
import { ProductsService } from '../../../core/api/products/service/products.service';
import { CartService } from '../../../services/cart/cart.service';
import { SettingsService } from '../../../services/settings/settings.service';

@Component({
  selector: 'app-home-page',
  imports: [RouterModule, JsonPipe],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export default class HomePageComponent implements OnInit {
  public products = signal<Product[]>([]);
  public cartItems = signal<Product[]>([]);

  settingsService = inject(SettingsService);


  constructor(
    private productService: ProductsService,
    public cartService: CartService) {
      
  }


  ngOnInit(): void {
    this.cartItems = this.cartService.items;
    
    this.productService.getProducts().subscribe((response) => {
      this.products.set(response);
    }); 

    
  }
    

}
