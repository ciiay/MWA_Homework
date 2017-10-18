import {Injectable} from "@angular/core";
import {PRODUCTS} from "./mock-products";
import {Product} from "./product";
import {Observable} from "rxjs/Rx";
import {Subject} from "rxjs/Subject";

@Injectable()
export class ProductService{
  // getProducts() :Promise<Product[]> {
  //   return Promise.resolve(PRODUCTS);
  // }

  private productsSubject = new Subject<Product[]>();

  getProducts(): Observable<Product[]> {

    setTimeout(() => this.productsSubject.next(PRODUCTS), 0);

    return this.productsSubject;

  }

}
