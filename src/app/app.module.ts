import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Ref: */
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReferencesComponent } from './references/references.component';
import { HomeComponent } from './home/home.component';
import { ConstructionComponent } from './construction/construction.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: ConstructionComponent },
  { path: 'download', component: ConstructionComponent },
  { path: 'hulp', component: ConstructionComponent },
  { path: 'login', component: ConstructionComponent },
  { path: 'recepten', component: ConstructionComponent },
  { path: 'referenties', component: ReferencesComponent },
  { path: 'registreren', component: ConstructionComponent },
  { path: 'winkels', component: ConstructionComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ReferencesComponent,
    HomeComponent,
    ConstructionComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
