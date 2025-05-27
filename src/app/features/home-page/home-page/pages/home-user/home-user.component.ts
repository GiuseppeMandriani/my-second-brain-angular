import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { Product } from '../../../../../core/api/products/models/products-data.model';
import { ProductsService } from '../../../../../core/api/products/service/products.service';
import { Router } from '@angular/router';
import { CartService } from '../../../../../services/cart/cart.service';
import { JsonPipe } from '@angular/common';
import { SettingsService } from '../../../../../services/settings/settings.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthService } from '@auth0/auth0-angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home-user',
  imports: [JsonPipe, TranslateModule],
  templateUrl: './home-user.component.html',
  styleUrl: './home-user.component.scss'
})
export default class HomeUserComponent implements OnInit {
  public settingsService = inject(SettingsService);
  private authService = inject(AuthService);
  private translateService = inject(TranslateService);

  public products = signal<Product[]>([]);
  public cartItems = signal<Product[]>([]);

  public user = toSignal(this.authService.user$);

  // Computed username
  public userName = computed(() => this.user()?.name ?? null);

  // Signal per il messaggio tradotto
  public homeUserLabel = signal<string>('SHARED:WELCOME_USER');



  constructor(
    private productService: ProductsService,
    private router: Router,
    public cartService: CartService
  ) {
    // Effetto reattivo: cambia il messaggio localizzato quando cambia userName
    effect(() => {
      const userName = this.userName();
      if (userName) {
        this.translateService
          .get('SHARED:WELCOME_USER', { userName })
          .subscribe(res => {
            this.homeUserLabel.set(res);
          });
      } else {
        this.homeUserLabel.set('WELCOME');
      }
    });
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.items;

    this.productService.getProducts().subscribe(response => {
      this.products.set(response);
    });
  }


}
