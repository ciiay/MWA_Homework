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

@Component({
  selector:'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>{{product.name}} details!</h2>
    <div><label>id: </label>{{product.id}}</div>
    <div><label>name: </label>
      <input [(ngModel)]="product.name" placeholder="name">
    </div>
    <div><label>description: </label>
        <input [(ngModel)]="product.description" placeholder="description">
    </div>
    <div><label>price: </label>
    <input [(ngModel)]="product.price" placeholder="price">
    </div>
    <div><label>condition:</label>
      <select [(ngModel)]="product.condition">
        <option>--select--</option>
        <option>${conditions[0]}</option>
        <option>${conditions[1]}</option>
        <option>${conditions[2]}</option>
      </select>
    </div>
    <div><label>category:</label>
    <select [(ngModel)]="product.category">
      <option>--select--</option>
      <option>${categories[0]}</option>
      <option>${categories[1]}</option>
      <option>${categories[2]}</option>
    </select>
    
      
    </div>
  `
})

export class AppComponent { 
  title = 'Learn Angular';
  product: Product = {
    id: 1,
    name: 'Learn Angular',
    description: 'A book for beginner',
    price: 29.99,
    condition: conditions[0],
    category: categories[0]
  };

  
 }

