import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const expectedRole = route.data['role'];

  if (!authService.isAuthenticated()) {
    router.navigate(['/login']);
    return false;
  }

  const user = authService.getUser();
  if (user && user.role === expectedRole) {
    return true;
  } else {
    alert('You do not have permission to access this page.');
    router.navigate(['/home']);
    return false;
  }
};
