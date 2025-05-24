import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile',
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export default class ProfileComponent {

  // user$ = inject(AuthService).user$;
  user = toSignal(inject(AuthService).user$);
  yourData = computed(() => {
    return `${this.user()?.name} (${this.user()?.email})`
  })

}
