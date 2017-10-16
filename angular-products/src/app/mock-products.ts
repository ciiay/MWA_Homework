
import {Categories, Conditions, Product} from "./product";

export const PRODUCTS: Product[] = [

  { id: 11, name: 'TV', description: '4k tec', price: 600, condition: Conditions[0], category: Categories[2] },
  { id: 12, name: 'Gloves', description: 'Workout gloves for women', price: 14.99, condition: Conditions[0], category: Categories[1] },
  { id: 13, name: 'How to program', description: 'For programming beginners', price: 35.68, condition: Conditions[1], category: Categories[0] },
  { id: 14, name: 'Blubetooth headphone', description: 'Two ears', price: 49.98, condition: Conditions[0], category: Categories[2] },
  { id: 15, name: 'Beaty seceret', description: 'Health care for girls', price: 18.69, condition: Conditions[0], category: Categories[0] },
  { id: 16, name: 'Laptop', description: '14 inch', price: 1200, condition: Conditions[1], category: Categories[2] },
  { id: 17, name: 'Kitty hat', description: 'Pink', price: 12, condition: Conditions[0], category: Categories[1] },
  { id: 18, name: 'Smart phone', description: 'High pix camera', price: 500, condition: Conditions[0], category: Categories[2] },
  { id: 19, name: 'How to cook at home', description: 'Easies recipes', price: 9.99, condition: Conditions[0], category: Categories[0] },
  { id: 20, name: 'Air conditioner', description: 'Low energy consuption', price: 360, condition: Conditions[0], category: Categories[2] },
];
