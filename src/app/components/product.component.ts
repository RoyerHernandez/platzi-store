import { Component, Input, Output, EventEmitter } from "@angular/core"; '@angular/core';
import { Product } from '../product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})


export class ProductComponent {
  @Input()
  product!: Product;

  @Output() 
  productClicked: EventEmitter<any> = new EventEmitter();

  addCar() {
    console.log('añadir al carrito');
    this.productClicked.emit(this.product.id)    
  }
}