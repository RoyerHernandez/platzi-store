import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'platzi-store';
  items = ['tenis', 'camisas', 'camisetas'];

  power = 10;

  
  addItems(){
    this.items.push('nuevo');
  }
  
  deleteItems(index : number){
    this.items.splice(index, 1);
  }

}
