import {Pipe, PipeTransform} from "@angular/core";
import {Product} from "../product";

@Pipe({
  name: 'subTotal'
})

export class CartSubtotalPipe implements PipeTransform {
  transform(product: Product, unit: number) {
    if (!product) {
      return null;
    }

    return product.price * unit;
  }
}
