import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-list-main',
  templateUrl: './list-main.component.html',
  styleUrls: ['./list-main.component.css'],
  providers: [ListService, ProductService]
})
export class ListMainComponent implements OnInit {
  sortAbc: boolean;

  constructor() { }

  ngOnInit() {
    this.sortAbc = false;
  }

  onSortAbc() {
    this.sortAbc = true;
  }

  onSortCategory() {
    this.sortAbc = false;
  }
}
