import {Injectable} from "@angular/core";
import {PRODUCTS} from "./mock-products";
import {Product} from "./product";
import {Observable} from "rxjs/Rx";
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class ProductService{
  // getProducts() :Promise<Product[]> {
  //   return Promise.resolve(PRODUCTS);
  // }

  private productsSubject = new BehaviorSubject<Product[]>(null);

  getProducts(): Observable<Product[]> {

    //setTimeout(() => this.productsSubject.next(PRODUCTS), 0);
    this.productsSubject.next(PRODUCTS);

    return this.productsSubject;

  }

  deleteProduct(product: Product){
    PRODUCTS.splice(PRODUCTS.indexOf(product), 1);
  }

  addProduct(product: Product):void {
    PRODUCTS.push(product);
  }

  updateProduct() {

  }

}
