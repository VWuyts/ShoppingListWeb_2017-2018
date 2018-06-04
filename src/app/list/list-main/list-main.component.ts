import { Component, OnInit, ViewChild } from '@angular/core';
import { ListService } from '../../services/list.service';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-main',
  templateUrl: './list-main.component.html',
  styleUrls: ['./list-main.component.css'],
  providers: [ListService, ProductService],
})
export class ListMainComponent implements OnInit {
  sortAbc: boolean;

  constructor(private listService: ListService, private router: Router) { }

  ngOnInit() {
    this.sortAbc = false;
  }

  onSortAbc() {
    this.sortAbc = true;
  }

  onSortCategory() {
    this.sortAbc = false;
  }

  onClearList() {
    // TODO: ask confirmation
    this.listService.clearShoppingList();
  }
}
