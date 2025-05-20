import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const isLogged = false;
  if (!isLogged) {
    router.navigateByUrl('homepage')
  }
  return isLogged
};


