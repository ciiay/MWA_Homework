import {Injectable} from "@angular/core";
import {ProductLine} from "./productLine";
import {Product} from "../product";

@Injectable()
export class CartService {
  cart: ProductLine[] = new Array<ProductLine>();

  addToCart(product: Product) {
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].product.id === product.id) {
        this.cart[i].unit++;
        return;
      }
    }
    let newProductLine = new ProductLine(product, 1);
    this.cart.push(newProductLine);
    }



  removeFromCart(productLine: ProductLine): void{
    if (productLine.unit > 1) {
      productLine.unit--;
    } else {
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].product.id === productLine.product.id) {

          // use slice(start, number) to delete an element from an array
          this.cart.splice(this.cart.indexOf(productLine), 1);
        }
      }
    }
  }


}
