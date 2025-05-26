import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CartService } from '../../../services/cart/cart.service';
import { RouterLink } from '@angular/router';
import { SettingsService } from '../../../services/settings/settings.service';
import { AuthService } from '@auth0/auth0-angular';
import { AsyncPipe, DOCUMENT } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-navbar-2',
  imports: [RouterLink],
  templateUrl: './navbar-2.component.html',
  styleUrl: './navbar-2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar2Component {
  cartService = inject(CartService);
  settingsService = inject(SettingsService);
  auth = inject(AuthService);
  document = inject(DOCUMENT);
  authSignal = toSignal(this.auth.isAuthenticated$);

  user = toSignal(inject(AuthService).user$);
  userImage = computed<string>(() => {
    return this.user()?.picture || 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
  })


}
