import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReferencesComponent } from './references/references.component';
import { ListComponent } from './list/list.component';
import { ListMainComponent } from './list/list-main/list-main.component';
import { ListItemComponent } from './list/list-item/list-item.component';
import { UnitPipe } from './pipes/unit.pipe';
import { LimitPipe } from './pipes/limit.pipe';
import { AddProductComponent } from './list/add-product/add-product.component';
import { AddCatalogueProductComponent } from './list/add-catalogue-product/add-catalogue-product.component';
import { ProductComponent } from './list/product/product.component';
import { EditProductComponent } from './list/edit-product/edit-product.component';
import { HomeComponent } from './home/home.component';
import { ConstructionComponent } from './construction/construction.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: ConstructionComponent },
  { path: 'download', component: ConstructionComponent },
  { path: 'hulp', component: ConstructionComponent },
  { path: 'lijst', component: ListMainComponent, children: [
    { path: 'catalogus/:category', component: AddCatalogueProductComponent },
    { path: 'nieuwProduct/:id/:name', component: EditProductComponent },
    { path: 'pasProductAan/:id/:name', component: EditProductComponent },
    { path: 'voegProductToe', component: AddProductComponent }
  ]},
  { path: 'login', component: ConstructionComponent },
  { path: 'recepten', component: ConstructionComponent },
  { path: 'referenties', component: ReferencesComponent },
  { path: 'registreren', component: ConstructionComponent },
  { path: 'winkels', component: ConstructionComponent },
  { path: '404-page', component: PageNotFoundComponentComponent },
  { path: '**', redirectTo: '404-page'}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ReferencesComponent,
    ListComponent,
    ListMainComponent,
    ListItemComponent,
    UnitPipe,
    LimitPipe,
    AddProductComponent,
    AddCatalogueProductComponent,
    ProductComponent,
    EditProductComponent,
    HomeComponent,
    ConstructionComponent,
    PageNotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
