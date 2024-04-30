import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from '../user.service';

export const isConnectedGuard: CanActivateFn = (route, state) => {
  const service = inject(UserService)
  if (service.getUserRole() === "USER" || service.getUserRole() === "ADMIN") {
    return true;
  } else {
    return false;
  }
};
