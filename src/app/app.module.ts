import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxSlideshowModule } from 'ngx-slideshow';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ImageUploadModule } from "angular2-image-upload";
import {RatingModule} from "ngx-rating";
import { HttpModule  } from "@angular/http";

import { AddProductService } from "./add-product/add-product.service";
import { AllCategoriesService } from "./all-categories/all-categories.service";
import { CartService } from "./cart/cart.service";
import { OrderService } from "./order/order.service";
import { SalesService } from "./sales/sales.service";
import { ProductService } from "./product/product.service";
import { SubcategoryService } from "./subcategory/subcategory.service";
import { ShelfService } from "./shelf/shelf.service";
import { AppService } from "./app.service";
import { HomeService } from "./home/home.service";
import { SearchService } from "./search/search.service";


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
import { ShelfComponent } from './shelf/shelf.component';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';


import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { LoginService } from  './login.service' ;
import {SocialLoginModule,AuthServiceConfig,GoogleLoginProvider,FacebookLoginProvider,} from "angular5-social-login";
import { ActivatedRoute} from '@angular/router';
import {  Router } from '@angular/router';
<<<<<<< HEAD
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import {MatExpansionModule} from '@angular/material/expansion';

=======
import { SignupService } from './signup.service';
>>>>>>> a5fc555abaf32383d95bb8f316ca9d1a94bfe12a


// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("1612080208881297")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("448503575381-ep149o1uol53j8s1krafdiaer6m02est.apps.googleusercontent.com")
        },
      ]
  );
  return config;
}



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
    ShelfComponent,
    AllCategoriesComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule, 
    MatCheckboxModule,
    NgxSlideshowModule.forRoot(),
    FormsModule,
    ImageUploadModule.forRoot(),
    RatingModule,
    HttpModule,
    // MatSidenavModule,
    HttpClientModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatExpansionModule
    // Router,
    

  ],
  exports: [MatExpansionModule]
  ,
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [LoginService, AppService,HomeService,{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  },
    AddProductService,
    AllCategoriesService,
    CartService,
    OrderService,
    SalesService,
    ProductService,
    SubcategoryService,
    AppService,
    HomeService,
    ProductService,
    SubcategoryService,
<<<<<<< HEAD
    SearchService
=======
    SignupService,
    ShelfService,

>>>>>>> a5fc555abaf32383d95bb8f316ca9d1a94bfe12a
],


  bootstrap: [AppComponent]
})
export class AppModule { }
