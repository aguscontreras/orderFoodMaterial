import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material/material.module';
import { SharedModule } from './modules/shared/shared.module';
import { MenuModule } from './modules/menu/menu.module';

import { AppComponent } from './app.component';
import { CheckoutModule } from './modules/checkout/checkout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    MenuModule,
    CheckoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
