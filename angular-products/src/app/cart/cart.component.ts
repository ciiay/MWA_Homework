import { ProductLine } from './productLine';
import {Product} from "../product";
import {Component, Input, OnInit} from "@angular/core";
import {CartService} from "./cart.service";

@Component({
  selector:"cart",
  template:`
    <h2>Cart</h2>
    <table class="cart">
      <tr>
        <td>Product Name</td>
        <td>Price</td>
        <td>Quantity</td>
        <td>Edit</td>
        <td>Cart subtotal</td>
      </tr>
      <tr *ngFor="let productLine of cart">
        <td>{{ productLine.product.name }}</td>
        <td>{{ productLine.product.price }}</td>
        <td>{{ productLine.unit }}</td>
        <td><button (click)="removeFromCart(productLine)" >-</button><button (click)="addToCart(productLine)" >+</button></td>
        <td>{{ productLine.product | subTotal: productLine.unit }}</td>
      </tr>
    </table>
    <div>
      <span>Total: {{calTotal()}}</span>
    </div>
  `,
  styles:[`
    .cart {
      border-collapse: collapse;
      width: 50%;
    }

    table, th, td {
      border: 2px solid aqua;
    }

  `]
})

export class CartComponent implements OnInit{
  @Input() currentProduct: Product;
  @Input() productLine: ProductLine;
  cart: ProductLine[];
  constructor(private cartService: CartService) {}

  ngOnInit(){
    this.cart = this.cartService.cart;
  }

  removeFromCart(productLine: ProductLine):void {
    this.cartService.removeFromCart(productLine);
  }

  addToCart(productLine: ProductLine):void{
    this.cartService.addToCart(productLine.product);
  }

  calTotal(): number{
    let sum = 0;
    for (let i = 0; i < this.cart.length; i++) {
      sum += this.cart[i].unit * this.cart[i].product.price;
    }
    return sum;
  }

}
