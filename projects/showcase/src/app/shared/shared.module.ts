import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [SidebarComponent, NavbarComponent, PageWrapperComponent],
  imports: [RouterModule],
  providers: [],
})
export class SharedModule {}
