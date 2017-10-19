import { Product, Conditions, Categories } from './product';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CartService} from "./cart/cart.service";

@Component ({
    selector: 'product-detail',
    template:`
        <div *ngIf="product">
        <h2>{{product.name}} details!</h2>
        <div><label>id: </label>{{product.id}}</div>
        <div><label>description: </label>{{product.description}}</div>
        <div><label>price: </label>{{product.price}}</div>
        <div><label>condition: </label>{{product.condition}}</div>
        <div><label>category: </label>{{product.category}}</div>
          <div><button (click) = "addToCart(product)">add to cart</button></div>
          <br>
          <div><button (click) = "requestDelete()">Delete Product</button></div>
        
        <h2>Update Product</h2>
        <div>
        <label>name: </label>
        <input [(ngModel)]="product.name" placeholder = "name"/>
        </div>
        <div>
        <label>description: </label>
        <input [(ngModel)]="product.description" placeholder="description">
        </div>
        <div><label>price: </label>
        <input [(ngModel)]="product.price" placeholder="price">
        </div>
        <div><label>condition:</label>
        <select [(ngModel)]="product.condition">
            <option>--select--</option>
            <option>{{conditions[0]}}</option>
            <option>{{conditions[1]}}</option>
            <option>{{conditions[2]}}</option>
        </select>
        </div>
        <div><label>category:</label>
        <select [(ngModel)]="product.category">
        <option>--select--</option>
        <option>{{categories[0]}}</option>
        <option>{{categories[1]}}</option>
        <option>{{categories[2]}}</option>
        </select>
        </div>
    </div>
    `
})

export class ProductDetailComponent {
    @Input() product: Product;
    @Output() deleteRequest = new EventEmitter<Product>();
    conditions = Conditions;
    categories = Categories;

    constructor(private cartService: CartService){}

    addToCart(product: Product):void{
      this.cartService.addToCart(this.product);
    }

    requestDelete():void {
      this.deleteRequest.emit(this.product);
    }

}
