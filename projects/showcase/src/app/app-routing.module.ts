import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', component: LandingComponent, pathMatch: 'full' },
  // { path: 'installation', loadChildren: () => import('../pages/installation/installation.module').then((m) => m.InstallationModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
