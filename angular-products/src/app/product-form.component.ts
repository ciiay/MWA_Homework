import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Categories, Conditions, Product} from "./product";

@Component({
  selector:'product-form',
  templateUrl: './product-form.component.html'
})

export class ProductFormComponent {
  @Output() addRequest = new EventEmitter<Product>();
  @Input() products: Product[];
  conditions = Conditions;
  categories = Categories;

  // get product from form
  requestAdd(form):void {

    let product = new Product();

    product.name = form.value.product_name;
    product.id = form.value.product_id;
    product.description = form.value.description;
    product.price = form.value.product_price;

    if (form.value.product_condition != "") {
      product.condition = form.value.product_condition;
    }

    if (form.value.product_category != "") {
      product.category = form.value.product_category;
    }

    // send set product to parent component
    this.addRequest.emit(product);

    form.resetForm({product_condition: "", product_category: ""});
  }
}
