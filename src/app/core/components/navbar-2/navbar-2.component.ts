import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CartService } from '../../../services/cart/cart.service';
import { RouterLink } from '@angular/router';
import { SettingsService } from '../../../services/settings/settings.service';

@Component({
  selector: 'app-navbar-2',
  imports: [RouterLink],
  templateUrl: './navbar-2.component.html',
  styleUrl: './navbar-2.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar2Component {
  cartService = inject(CartService);
  settingsService = inject(SettingsService);

}
