import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../product/product';
import { ListService } from '../../services/list.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-catalogue-product',
  templateUrl: './add-catalogue-product.component.html',
  styleUrls: ['./add-catalogue-product.component.css']
})
export class AddCatalogueProductComponent implements OnInit {
  category: string;

  constructor(private listService: ListService, private productService: ProductService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: Params) => {
        this.category = params.get('category');
      }
    );
  }

  getProducts() {
    return this.productService.getProducts(this.category);
  }
  isProductOnList(product: Product) {
    return this.listService.isProductOnList(product.id);
  }

  addProductToList(product: Product) {
    if (!this.listService.isProductOnList(product.id)) {
      this.listService.addProductToList(0, false, product);
    }
  }

  onNewProduct() {
    this.router.navigate(['/lijst/nieuwProduct/-1/Nieuw product']);
  }

  onReady() {
    this.router.navigate(['/lijst']);
  }
}
