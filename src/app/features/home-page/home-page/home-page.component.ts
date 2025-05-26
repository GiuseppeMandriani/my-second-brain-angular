import { JsonPipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Product } from '../../../core/api/products/models/products-data.model';
import { CartService } from '../../../services/cart/cart.service';
import { SettingsService } from '../../../services/settings/settings.service';
import { AuthService } from '@auth0/auth0-angular';
import { take } from 'rxjs';

@Component({
  selector: 'app-home-page',
  imports: [RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export default class HomePageComponent implements OnInit {
  public products = signal<Product[]>([]);
  public cartItems = signal<Product[]>([]);

  settingsService = inject(SettingsService);
  auth = inject(AuthService);

  isLoggedIn = signal(false);



  constructor(
    private router: Router,
    public cartService: CartService) {
      
  }


  ngOnInit(): void {

    this.auth.isAuthenticated$.pipe(take(1)).subscribe((isAuthenticated) => {
      this.isLoggedIn.set(isAuthenticated);
      if (this.isLoggedIn()) {
        this.router.navigate(['/homepage/home-user']);
      } else {
        console.warn('Utente non autenticato');
        this.router.navigate(['/homepage/home-landing']);
      }
    });
    
  }
    

}
