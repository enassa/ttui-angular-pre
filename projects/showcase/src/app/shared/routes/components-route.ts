import { Routes } from '@angular/router';
import { LandingComponent } from '../../pages/landing/landing.component';

export const COMPONENTS_ROUTES: Routes = [
  {
    path: 'button',
    component: LandingComponent,
    pathMatch: 'full',
  },
];
