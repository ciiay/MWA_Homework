import { Component } from '@angular/core';

export class Product {
  id: number;
  name: String;
  description: String;
  price: number;
  condition: string;
  category: string;

}

export const conditions = ["New", "Used", "Uncontinued"];
export const categories = ["Books", "Clothing", "Electronics"];

const PRODUCTS: Product[] = [
  { id: 11, name: 'TV', description: '4k tec', price: 600, condition: conditions[0], category: categories[2] },
  { id: 12, name: 'Gloves', description: 'Workout gloves for women', price: 14.99, condition: conditions[0], category: categories[1] },
  { id: 13, name: 'How to program', description: 'For programming beginners', price: 35.68, condition: conditions[1], category: categories[0] },
  { id: 14, name: 'Blubetooth headphone', description: 'Two ears', price: 49.98, condition: conditions[0], category: categories[2] },
  { id: 15, name: 'Beaty seceret', description: 'Health care for girls', price: 18.69, condition: conditions[0], category: categories[0] },
  { id: 16, name: 'Laptop', description: '14 inch', price: 1200, condition: conditions[1], category: categories[2] },
  { id: 17, name: 'Kitty hat', description: 'Pink', price: 12, condition: conditions[0], category: categories[1] },
  { id: 18, name: 'Smart phone', description: 'High pix camera', price: 500, condition: conditions[0], category: categories[2] },
  { id: 19, name: 'How to cook at home', description: 'Easies recipes', price: 9.99, condition: conditions[0], category: categories[0] },
  { id: 20, name: 'Air conditioner', description: 'Low energy consuption', price: 360, condition: conditions[0], category: categories[2] },
];

@Component({
  selector:'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>Instore Products</h2>
    <ul class="products">
      <li *ngFor="let product of products"
        [class.selected]="product === selectedProduct"
        (click)="onSelect(product)">
        <span class="badge">{{product.id}}</span> {{product.name}}
      </li>
    </ul>
    <div *ngIf="selectedProduct">
      <h2>{{selectedProduct.name}} details!</h2>
      <div><label>id: </label>{{selectedProduct.id}}</div>
      <div><label>description: </label>{{selectedProduct.description}}</div>
      <div><label>price: </label>{{selectedProduct.price}}</div>
      <div><label>condition: </label>{{selectedProduct.condition}}</div>
      <div><label>category: </label>{{selectedProduct.category}}</div>
      
      <h2>Update Product</h2>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedProduct.name" placeholder = "name"/>
      </div>
      <div>
        <label>description: </label>
        <input [(ngModel)]="selectedProduct.description" placeholder="description">
      </div>
      <div><label>price: </label>
      <input [(ngModel)]="selectedProduct.price" placeholder="price">
      </div>
      <div><label>condition:</label>
        <select [(ngModel)]="selectedProduct.condition">
          <option>--select--</option>
          <option>${conditions[0]}</option>
          <option>${conditions[1]}</option>
          <option>${conditions[2]}</option>
        </select>
      </div>
      <div><label>category:</label>
      <select [(ngModel)]="selectedProduct.category">
        <option>--select--</option>
        <option>${categories[0]}</option>
        <option>${categories[1]}</option>
        <option>${categories[2]}</option>
      </select>
      </div>
    </div>
  `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .products {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .products li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .products li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .products li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .products .text {
    position: relative;
    top: -3px;
  }
  .products .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})

export class AppComponent { 
  title = 'Product Page';
  products = PRODUCTS;

  /* this is for step2 */
  // product: Product = {
  //   id: 1,
  //   name: 'Learn Angular',
  //   description: 'A book for beginners',
  //   price: 29.99,
  //   condition: conditions[0],
  //   category: categories[0]
  // };

  selectedProduct: Product;

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
  
 }

