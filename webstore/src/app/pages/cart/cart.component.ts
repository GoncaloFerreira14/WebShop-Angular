import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: `cart.component.html`,
  styles: [
  ]
})
export class CartComponent implements OnInit {
  dataSrc: Array<CartItem> = [];
  cart: Cart ={items:[{
    product: "https://via.placeholder.com/150",
    name: "explicação 12ºano",
    price: 20.0,
    quantity: 10,
    id:1
  },
  {
    product: "https://via.placeholder.com/150",
    name: "explicação 7ºano",
    price: 20.0,
    quantity: 10,
    id:2
  }
  ]};
  displayCols: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ];
  constructor() { }

  ngOnInit(): void {
    this.dataSrc = this.cart.items;
  }

  getTotal(items: Array<CartItem>):number{
      return items.map((item)=> item.price*item.quantity).reduce((prev,current)=> prev+current,0);
  }
}
