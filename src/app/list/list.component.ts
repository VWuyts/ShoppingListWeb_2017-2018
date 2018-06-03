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
  shoppingList: ListItem[] = [];
  shoppingListCategory: ListItem[][];
  emptyList = false;
  @Input() childSortAbc: boolean;

  constructor(private listService: ListService, private productService: ProductService) { }

  ngOnInit() {
    this.categories = this.productService.getCategories();
    this.shoppingList = this.listService.getShoppingList();
    this.shoppingListCategory = new Array(this.categories.length);
    for (let i = 0; i < this.categories.length; i++) {
      this.shoppingListCategory[i] = this.listService.getShoppingListFor(this.categories[i]);
    }
  }

  clearShoppingList() {
    this.shoppingList = [];
    for (let i = 0; i < this.shoppingListCategory.length; i++) {
      this.shoppingListCategory[i] = [];
    }
    this.emptyList = true;
  }
}
