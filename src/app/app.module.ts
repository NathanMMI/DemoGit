import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CompIrvinComponent } from './comp-irvin/comp-irvin.component';

@NgModule({
  declarations: [
    AppComponent,
    CompIrvinComponent
  ],
  imports: [
    BrowserModule,RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
