import { Component, OnInit } from '@angular/core';
import { ListItem } from '../list-item/list-item';
import { Product } from '../product/product';
import { ListService } from '../../services/list.service';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  id: number;
  itemName: string;
  listItem: ListItem;
  title: string;
  itemImage: string;
  categories: string[] = [];
  itemCategory: string;
  itemAmount: number;
  units: string[] = [];
  itemUnit: string;
  shops: string[] = [];
  itemShop: string;
  itemIsFixedShop: boolean;
  itemNote: string;
  itemInPromotion: boolean;
  itemIsFavourite: boolean;
  favouriteBtn: string;

  constructor(private listService: ListService, private productService: ProductService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(
        (params: Params) => {
          this.id = +params.get('id');
          this.itemName = params.get('name');
          this.listItem = this.listService.getListItem(this.id);
          this.title = this.id >= 0 ? 'Product aanpassen' : 'Nieuw product maken';
          this.itemImage = this.listItem && this.listItem.image ? '/assets/images/' + this.listItem.image
            : '/assets/images/camera.svg'; // Ref: FontAwesome_2018
          this.itemCategory = this.listItem ? this.listItem.category : '';
          this.itemAmount = this.listItem ? this.listItem.amount : 0;
          this.itemUnit = this.listItem ? this.listItem.unit : '';
          this.itemShop = this.listItem ? this.listItem.shop : '';
          this.itemIsFixedShop = this.listItem ? this.listItem.isFixedShop : false;
          this.itemNote = this.listItem ? this.listItem.note : '';
          this.itemInPromotion = this.listItem ? this.listItem.inPromotion : false;
          this.itemIsFavourite = this.listItem ? this.listItem.isFavourite : false;
          this.favouriteBtn = this.itemIsFavourite ? 'Verwijder uit favorieten' : 'Zet bij favorieten';
        }
      );

      this.categories = this.productService.getCategories();
      this.units = this.productService.getUnits();
      this.shops = this.productService.getShops();
  }

  onEditListItem() {
    const productIndex = this.productService.getProductIndex(this.itemName);
    const image = this.listItem ? this.listItem.image : '';
    const category = this.itemCategory || 'Andere';
    let product: Product;
    if (productIndex < 0) {
      product = this.productService.addProduct(this.itemName, category, this.itemUnit, image, this.itemNote,
        this.itemShop, this.itemIsFixedShop, this.itemIsFavourite);
    } else {
      product = this.productService.updateProduct(productIndex, category, this.itemUnit, image,
        this.itemNote, this.itemShop, this.itemIsFixedShop);
    }
    this.listService.updateItemInList(this.id, this.itemAmount, this.itemInPromotion, product);
    this.router.navigate(['/lijst']);
  }

  onDeleteListItem() {
    if (this.listItem) {
      this.listService.removeItemFromList(this.listItem);
    }
    this.router.navigate(['/lijst']);
  }

  toggleFavourite() {
    this.listService.toggleFavourite(this.listItem);
    this.productService.toggleFavourite(this.listItem.productId);
    this.itemIsFavourite = this.listItem ? this.listItem.isFavourite : false;
    this.favouriteBtn = this.itemIsFavourite ? 'Verwijder uit favorieten' : 'Zet bij favorieten';
  }
}
