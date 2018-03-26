import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

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

const routes = [
// userRoutes
    {path: 'login', component: LoginComponent},
    {path : 'signup', component : SignUpComponent},
    {path : '', component : HomeComponent},
    {path : 'profile', component : ProfileComponent},
    {path : 'subcat/:id', component : SubcategoryComponent},
    {path : 'allCat/subcat/:id', component : SubcategoryComponent},
    {path : 'allCat', component : AllCategoriesComponent},
    {path : 'product', component : ProductComponent},
    {path : 'cart', component : CartComponent},
    {path : 'search', component : SearchComponent},

// seller routes
    {path : 'add', component : AddProductComponent},
    {path : 'edit/:id', component : AddProductComponent},
    {path : 'order/:id', component : OrderComponent},
    {path : 'sales', component : SalesComponent},
    {path : 'shelf', component : ShelfComponent},
];
@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})export class AppRoutingModule {}