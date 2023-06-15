import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { InstallationComponent } from './pages/installation/installation.component';
import { ComponentsComponent } from './pages/components/components.component';
import { COMPONENTS_ROUTES } from './shared/routes/components-route';
import { GETTING_STARTED_ROUTES } from './shared/routes/intro-route';
import { PageWrapperComponent } from './shared/page-wrapper/page-wrapper.component';

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  {
    path: 'home',
    component: PageWrapperComponent,
    pathMatch: 'full',
    children: [...GETTING_STARTED_ROUTES, ...COMPONENTS_ROUTES],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
