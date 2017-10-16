import { Product } from "../product";

export class ProductLine {
  product: Product;
  unit: number;
  constructor(product: Product, unit: number){
    this.product = product;
    this.unit = unit;
  }

}
