import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  public shoppingCart: any[] = [];

  constructor(){

  }

  OnInit(): void{
    const res = localStorage.getItem('shoppingCart');

    if (!res) return;

    this.shoppingCart = JSON.parse(res);
    console.log(this.shoppingCart);
  }
  }


