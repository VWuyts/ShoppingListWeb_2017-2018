import { Component, OnInit, ViewChild } from '@angular/core';
import { ListComponent } from '../list.component';
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
  @ViewChild(ListComponent) /* Ref: AngularViewChild_2018 */
  private listComponent: ListComponent;
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
    this.listComponent.emptyList = true;
  }
}
