import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [],
  exports: [
    SharedModule
  ]
})
export class ThemeModule {

  // static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: ThemeModule,
  //     providers: [

  //     ]
  //   }
  // }

}
