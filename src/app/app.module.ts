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

const appRoutes: Routes = [
  { path: 'referenties', component: ReferencesComponent },
  { path: 'home', component: HomeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ReferencesComponent,
    HomeComponent
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
