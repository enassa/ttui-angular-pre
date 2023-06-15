import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './landing/landing.component';
import { OverviewComponent } from './overview/overview.component';
import { ALL_COMPONENTS_MODULE } from '../components/components-list';

@NgModule({
  declarations: [ComponentsComponent, LandingComponent, OverviewComponent],
  imports: [...ALL_COMPONENTS_MODULE],
  providers: [],
})
export class PagesModule {}
