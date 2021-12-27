import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { DefaultLayoutComponent } from './default-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    DefaultLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ], exports: [
    HeaderComponent,
    DefaultLayoutComponent,
  ]
})
export class DefaultLayoutModule { }
