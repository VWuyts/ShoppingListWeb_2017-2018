import { Component, Input, OnInit } from '@angular/core';
import { ListItem } from './list-item';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() childListItem: ListItem;
  showImage: boolean;
  imageSource: string;
  showShop: boolean;
  shopSource: string;

  constructor() { }

  ngOnInit() {
    this.showImage = this.childListItem.image !== '';
    this.imageSource = '/assets/images/' + this.childListItem.image;
    this.showShop = this.childListItem.shop !== '';
    this.shopSource = '/assets/images/logo_' + this.childListItem.shop + '.png';
  }

  getNote() {
    let completeNote = '';
    if (this.childListItem.note) {
      completeNote += (this.childListItem.amount ? ' - ' : '');
      completeNote += this.childListItem.note;
    }

    return completeNote;
  }

}
