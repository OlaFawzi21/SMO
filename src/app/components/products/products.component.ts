import { Component } from '@angular/core';
import { DataService } from './../../services/data.service';
import { Product } from 'src/app/interfaces/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products: Product[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.dataService.getProducts().subscribe({
      next: (res) => {
        this.products = res.products;
      },
    });
  }

}
