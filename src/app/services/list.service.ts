import { Injectable } from '@angular/core';
import { ListItem } from '../list/list-item/list-item';
import { Product } from '../list/product';
import { last } from '@angular/router/src/utils/collection';
import { shiftInitState } from '@angular/core/src/view';

@Injectable()
export class ListService {
  private shoppingList: ListItem[] = [
    {id: 1, amount: 0, inPromotion: true, productId: 4, name: 'Bananen', category: 'Fruit', unit: 'tros', image: 'bananen.png',
      note: 'Fair trade', shop: 'Delhaize', isFixedShop: true, isFavourite: true},
    {id: 2, amount: 0, inPromotion: false, productId: 2, name: 'Ananas', category: 'Fruit', unit: 'stuk', image: '',
      note: '', shop: '', isFixedShop: false, isFavourite: false},
    {id: 3, amount: 0, inPromotion: false, productId: 22, name: 'Asperges', category: 'Groenten', unit: '', image: '',
      note: '', shop: '', isFixedShop: false, isFavourite: false},
    {id: 4, amount: 0, inPromotion: false, productId: 45, name: 'Witte selder', category: 'Groenten', unit: '', image: '',
      note: '', shop: '', isFixedShop: false, isFavourite: false},
    {id: 5, amount: 3, inPromotion: true, productId: 142, name: 'Cappellini', category: 'Pasta en granen', unit: 'pak', image: '',
      note: 'Barilla', shop: 'Colruyt', isFixedShop: false, isFavourite: false},
    {id: 6, amount: 0, inPromotion: false, productId: 232, name: 'Witte bonen', category: 'Conserven', unit: '', image: '',
      note: '', shop: '', isFixedShop: false, isFavourite: false},
    {id: 7, amount: 0, inPromotion: false, productId: 133, name: 'Sojaroom', category: 'Zuivel', unit: '', image: '',
      note: '', shop: '', isFixedShop: false, isFavourite: false},
    {id: 8, amount: 1, inPromotion: false, productId: 246, name: 'Erwten', category: 'Diepvries', unit: 'pak', image: '',
      note: 'Dit is een notitie om de LimitPipe te tonen, er is ook een UnitPipe', shop: 'Delhaize', isFixedShop: true, isFavourite: false}
  ];
  private lastId = 8;

  constructor() { }

  getShoppingList() {
    // Ref: AngularPipes_2018
    this.shoppingList.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });

    return this.shoppingList;
  }

  getShoppingListFor(pCategory: string) {
    const result: ListItem[] = [];
    for (const listItem of this.shoppingList) {
      if (listItem.category === pCategory) {
        result.push(listItem);
      }
    }
    // Ref: AngularPipes_2018
    result.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });

    return result;
  }

  getListItem(pId: number) {
    if (pId < 1) {
      return null;
    }

    const listItem = this.shoppingList.find(
      (li) => {
        return li.id === pId;
      }
    );

    return listItem === undefined ? null : listItem;
  }

  addProductToList(product: Product) {
    const newId = ++this.lastId;
    this.shoppingList.push({id: newId, amount: 0, inPromotion: false, productId: product.id, name: product.name,
      category: product.category, unit: product.unit, image: product.image, note: product.note, shop: product.shop,
      isFixedShop: product.isFixedShop, isFavourite: product.isFavourite }
    );
  }

  updateItemInList(pId: number, pAmount: number, pInPromotion: boolean, product: Product) {
    const listItem = this.shoppingList.find(
      li => {
        return li.id === pId;
      }
    );
    if (listItem) {
      listItem.amount = pAmount;
      listItem.inPromotion = pInPromotion;
      listItem.productId = product.id;
      listItem.name = product.name;
      listItem.category = product.category;
      listItem.unit = product.unit;
      listItem.image = product.image;
      listItem.note = product.note;
      listItem.shop = product.shop;
      listItem.isFixedShop = product.isFixedShop;
    }
    console.log('updated ListItem: ');
    console.log(listItem);
  }

  removeItemFromList(listItem: ListItem) {
    const index = this.shoppingList.findIndex(item => item === listItem);
    if (index >= 0) {
      this.shoppingList.splice(index, 1);
    }
  }

  clearShoppingList() {
    this.shoppingList = [];
    this.lastId = 0;
    console.log(this.shoppingList);
  }

  toggleFavourite(listItem: ListItem) {
    const index = this.shoppingList.findIndex(item => item === listItem);
    if (index >= 0) {
      this.shoppingList[index].isFavourite = !this.shoppingList[index].isFavourite;
    }
  }
}
