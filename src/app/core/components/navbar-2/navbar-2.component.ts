import { Component, inject } from '@angular/core';
import { CartService } from '../../../services/cart/cart/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-2',
  imports: [RouterLink],
  templateUrl: './navbar-2.component.html',
  styleUrl: './navbar-2.component.css'
})
export class Navbar2Component {
  cartService = inject(CartService)

}
