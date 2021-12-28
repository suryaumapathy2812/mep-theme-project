import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ThemeModule } from '@suryaumapathy@2812/mep-theme';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { routes } from "./app.routing";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent
  ],
  imports: [
    BrowserModule,
    ThemeModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
