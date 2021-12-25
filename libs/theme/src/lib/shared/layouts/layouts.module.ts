import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { RouterModule } from '@angular/router';
import { ElementsModule } from '../elements/elements.module';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    LayoutComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ], exports: [
    LayoutComponent,
    AdminLayoutComponent,
    AuthLayoutComponent
  ]
})
export class LayoutsModule { }
