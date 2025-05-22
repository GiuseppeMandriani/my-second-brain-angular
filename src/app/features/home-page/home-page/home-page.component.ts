import { JsonPipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../../../core/api/products/models/products-data.model';
import { ProductsService } from '../../../core/api/products/service/products.service';

@Component({
  selector: 'app-home-page',
  imports: [RouterModule, JsonPipe],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export default class HomePageComponent implements OnInit {
  public products = signal<Product[]>([]);


  constructor(private productService: ProductsService) {

  }


  ngOnInit(): void {
    this.productService.getProducts().subscribe((response) => {
      this.products.set(response);
    });

    
  }
    

}
