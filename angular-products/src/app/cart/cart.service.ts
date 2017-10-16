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


}
