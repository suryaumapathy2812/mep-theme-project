import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout.component';
import { IconsModule } from '../../core/shared/icons/icons.module';



@NgModule({
  declarations: [
    AuthLayoutComponent
  ],
  imports: [
    CommonModule,
    IconsModule
  ], exports: [
    AuthLayoutComponent
  ]
})
export class AuthLayoutModule { }
