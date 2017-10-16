import { ProductDetailComponent } from './app.product-detail.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { AppComponent }  from './app.component';
import {ProductService} from "./product.service";
import {CartService} from "./cart/cart.service";
import {CartComponent} from "./cart/cart.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  declarations: [
    AppComponent,
    ProductDetailComponent,
    CartComponent
  ],
  providers:[ProductService, CartService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
