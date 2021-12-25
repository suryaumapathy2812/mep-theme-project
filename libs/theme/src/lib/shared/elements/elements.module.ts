import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavProfileComponent } from './nav-profile/nav-profile.component';



@NgModule({
  declarations: [
    NavProfileComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    NavProfileComponent
  ]
})
export class ElementsModule { }
