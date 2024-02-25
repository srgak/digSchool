import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserRoleService } from '../../services/storage/user-role/user-role.service';

const checkRole = (role: string): boolean => {
  return role === inject(UserRoleService).prop
}

export const canActivateAdmin: CanActivateFn = (): boolean => {
  if(!(checkRole('admin'))) {
    inject(Router).navigate(['../']);
  }
  return true;
}

export const canActivateTeacher: CanActivateFn = (): boolean => {
  if(!checkRole('teacher')) {
    inject(Router).navigate(['../']);
  }
  return true;
}

export const canActivatePupil: CanActivateFn = (): boolean => {
  if(!checkRole('pupil')) {
    inject(Router).navigate(['../']);
  }
  return true;
}