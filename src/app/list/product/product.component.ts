import { Component, Input, OnInit } from '@angular/core';
import { Product } from './product';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() childProduct: Product;

  constructor(private listService: ListService) { }

  ngOnInit() {
  }

  isProductOnList() {
    return this.listService.isProductOnList(this.childProduct.id);
  }
}
