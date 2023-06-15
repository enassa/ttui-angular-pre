import { Routes } from '@angular/router';
import { LandingComponent } from '../../pages/landing/landing.component';
import { InstallationComponent } from '../../pages/installation/installation.component';
import { OverviewComponent } from '../../pages/overview/overview.component';

export const GETTING_STARTED_ROUTES: Routes = [
  { path: 'installation', component: InstallationComponent },
  { path: 'overview', component: OverviewComponent },
];
// { path: 'installation', loadChildren: () => import('../pages/installation/installation.module').then((m) => m.InstallationModule) },
