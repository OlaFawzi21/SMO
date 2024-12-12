import { Component } from '@angular/core';
import { DataService } from './../../services/data.service';
import { Product } from 'src/app/interfaces/products';
import { ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  product!: Product;
  id: number = 0;

  constructor(
    private dataService: DataService,
    activatedRoute: ActivatedRoute,
    private meta: Meta
  ) {
    const idParam = activatedRoute.snapshot.paramMap.get('id');
    this.id = idParam ? +idParam : 0;
  }

  ngOnInit(): void {
    this.getProductDetails(this.id);
  }

  getProductDetails(id: number) {
    this.dataService.getProductDetails(id).subscribe({
      next: (res) => {
        this.product = res;
        console.log(this.product);

        this.meta.addTag({ property: 'og:title', content: this.product.title });
        this.meta.addTag({
          property: 'og:description',
          content:this.product.description,
        });
        this.meta.addTag({ property: 'og:image', content: this.product.images[0] });
        this.meta.addTag({ property: 'og:type', content: 'article' });
      },
    });
  }
}
