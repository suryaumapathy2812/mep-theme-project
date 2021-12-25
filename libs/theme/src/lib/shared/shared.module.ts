import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsModule } from './layouts/layouts.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ElementsModule } from './elements/elements.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutsModule,
  ], exports: [
    LayoutsModule
  ]
})
export class SharedModule { }
