import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSlideshowModule } from 'ngx-slideshow';
import { AppRoutingModule } from './app-routing.module';



import { FormsModule } from '@angular/forms';
import { ImageUploadModule } from "angular2-image-upload";
import {RatingModule} from "ngx-rating";
import {MatSidenavModule} from '@angular/material/sidenav';
import { HttpModule  } from "@angular/http";

import { AddProductService } from "./add-product/add-product.service";
import { AllCategoriesService } from "./all-categories/all-categories.service";
import { CartService } from "./cart/cart.service";
import { OrderService } from "./order/order.service";
import { SalesService } from "./sales/sales.service";
import { ShelfService } from "./shelf/shelf.service";


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProductComponent } from './product/product.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { AddProductComponent } from './add-product/add-product.component';
import { OrderComponent } from './order/order.component';
import { SalesComponent } from './sales/sales.component';
import { SearchComponent } from './search/search.component';
import { ShelfComponent } from './shelf/shelf.component';
import { AllCategoriesComponent } from './all-categories/all-categories.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignUpComponent,
    ProductComponent,
    SubcategoryComponent,
    CartComponent,
    ProfileComponent,
    AddProductComponent,
    OrderComponent,
    SalesComponent,
    SearchComponent,
    ShelfComponent,
    AllCategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSlideshowModule.forRoot(),
    FormsModule,
    ImageUploadModule.forRoot(),
    RatingModule,
<<<<<<< HEAD
=======
    MatSidenavModule,
    HttpModule,

  ],
  providers: [
    AddProductService,
    AllCategoriesService,
    CartService,
    OrderService,
    SalesService,
>>>>>>> 8978120a6fa48fd7dd967ce8093edb5e411638f9
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }