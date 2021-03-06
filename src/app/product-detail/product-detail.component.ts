import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { ProductsService } from './../core/services/products/products.service';
import { Product } from './../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product = {} as Product;

  constructor(
    private route: ActivatedRoute,
    private productsService : ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.product = this.productsService.GetProduct(id)!;
   });
  }

}
