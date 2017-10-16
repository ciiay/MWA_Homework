import { ProductLine } from './productLine';
import {Product} from "../product";
import {Component, OnInit} from "@angular/core";
import {CartService} from "./cart.service";

@Component({
  selector:"cart",
  template:`
    <table>
      <tr>
        <td>Product Name</td>
        <td>Price</td>
        <td>Quantity</td>
        <td>Cart subtotal</td>
      </tr>
      <tr *ngFor="let productLine of cart">
        <td>{{ productLine.product.name }}</td>
        <td>{{ productLine.product.price }}</td>
        <td>{{ productLine.unit }}</td>
        <td>{{ productLine.product.price * productLine.unit }}</td>
      </tr>
      <div>
        <span>Total: {{calTotal()}}</span>
      </div>
    </table>
  `
})

export class CartComponent implements OnInit{
  cart: ProductLine[];
  constructor(private cartService: CartService) {}

  ngOnInit(){
    this.cart = this.cartService.cart;
  }

  totalPrice: number;

  calTotal(): number{
    let sum = 0;
    for (let i = 0; i < this.cart.length; i++) {
      sum += this.cart[i].unit * this.cart[i].product.price;
    }
    return sum;
  }
}
