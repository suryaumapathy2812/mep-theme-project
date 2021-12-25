import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ElementsModule } from '../elements/elements.module';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    NavComponent,
  ],
  imports: [
    CommonModule,
    ElementsModule
  ], exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ElementsModule
  ]
})
export class ComponentsModule { }
