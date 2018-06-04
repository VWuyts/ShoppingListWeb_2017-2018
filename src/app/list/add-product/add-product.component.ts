import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';
import { ProductService } from '../../services/product.service';
import { Product } from '../product/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private listService: ListService, private productService: ProductService) { }

  ngOnInit() {
  }

  getFavourites() {
    return this.productService.getFavourites();
  }

  getCategories() {
    return this.productService.getCategories();
  }

  isProductOnList(product: Product) {
    return this.listService.isProductOnList(product.id);
  }

  addProductToList(product: Product) {
    if (!this.listService.isProductOnList(product.id)) {
      this.listService.addProductToList(0, false, product);
    }
  }
}
