import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';
  items = ['tenis', 'camisas', 'camisetas'];
  addItems(){
    this.items.push('nuevo');
  }
  deleteItems(index : number){
    this.items.splice(index, 1);
  }
}
