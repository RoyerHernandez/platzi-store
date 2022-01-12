import { Component } from '@angular/core';
import { Product } from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';
  items = ['tenis', 'camisas', 'camisetas'];

  products: Product[] = [
    {id: '1',
     image: 'assets/images/camiseta.png',
     title: 'Camiseta',
     price: 9000,
     description: 'bla bla bla bla bla'
    },
    {id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 12000,
      description: 'bla bla bla bla bla'
     },
     {id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 2000,
      description: 'bla bla bla bla bla'
     },
     {id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 1000,
      description: 'bla bla bla bla bla'
     },
     {id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 900,
      description: 'bla bla bla bla bla'
     },
     {id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 900,
      description: 'bla bla bla bla bla'
     }
  ]

  addItems(){
    this.items.push('nuevo');
  }
  deleteItems(index : number){
    this.items.splice(index, 1);
  }

  clickProduct(id: number){
    console.log('product');
    console.log(id);
  }

}