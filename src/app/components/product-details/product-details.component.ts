import { Component } from '@angular/core';
import { DataService } from './../../services/data.service';
import { Product } from 'src/app/interfaces/products';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

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
    private meta: Meta,
    private title: Title
  ) {
    const idParam = activatedRoute.snapshot.paramMap.get('id');
    this.id = idParam ? +idParam : 0;
  }

  ngOnInit(): void {
    this.removeMetaTags();
    this.getProductDetails(this.id);
  }

  getProductDetails(id: number) {
    this.dataService.getProductDetails(id).subscribe({
      next: (res) => {
        this.product = res;

        this.title.setTitle(this.product.title);
        this.meta.addTags([
          { property: 'og:title', content: this.product.title },
          { property: 'og:description', content: this.product.description },
          { property: 'og:image', content: this.product.images[0] },
          { property: 'og:url', content: window.location.href },
          { property: 'og:type', content: 'website' },
        ]);
      },
    });
  }

  removeMetaTags() {
    this.meta.removeTag("property='og:title'");
    this.meta.removeTag("property='og:description'");
    this.meta.removeTag("property='og:image'");
    this.meta.removeTag("property='og:url'");
    this.meta.removeTag("property='og:type'");
  }
}
