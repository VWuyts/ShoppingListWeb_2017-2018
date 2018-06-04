import { Component, Input, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { ListItem } from './list-item/list-item';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  categories: string[] = [];
  @Input() childSortAbc: boolean;

  constructor(private listService: ListService, private productService: ProductService) { }

  ngOnInit() {
    this.categories = this.productService.getCategories();
  }

  getShoppingList() {
    return this.listService.getShoppingList();
  }

  getShoppingListFor(category: string) {
    return this.listService.getShoppingListFor(category);
  }
}
