import { InjectionToken } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

export const NAVIGATIONEND = new InjectionToken<Observable<NavigationEnd>>('Навигация закончилась');
