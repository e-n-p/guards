import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from '../user.service';

export const isAdminGuard: CanActivateFn = (route, state) => {
  const service = inject(UserService)
  if (service.getUserRole() === "ADMIN") {
    return true;
  } else {
    return false;
  }
};
