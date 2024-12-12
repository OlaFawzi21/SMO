import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, ProductsComponent, ProductDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule , RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
