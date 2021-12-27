import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminLayoutModule, DefaultLayoutModule } from '@suryaumapathy@2812/mep-theme';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent
  ],
  imports: [
    BrowserModule,
    DefaultLayoutModule,
    AdminLayoutModule,
    RouterModule.forRoot([{ path: "", component: NxWelcomeComponent }])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
