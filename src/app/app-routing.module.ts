import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '**', redirectTo: 'products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}