import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutModule } from './layout/admin-layout/admin-layout.module';
import { AuthLayoutModule } from './layout/auth-layout/auth-layout.module';
import { DefaultLayoutModule } from './layout/default-layout/default-layout.module';
import { ThemeService } from './core/shared/theme.service';

@NgModule({
  imports: [
    CommonModule,
    AdminLayoutModule,
    AuthLayoutModule,
    DefaultLayoutModule
  ],
  providers: [
    ThemeService
  ],
  exports: [
    AdminLayoutModule,
    AuthLayoutModule,
    DefaultLayoutModule,
  ],
})
export class ThemeModule { }
