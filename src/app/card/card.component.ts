import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  implements OnInit{
  public cart: any[] = [
    {
      title: 'Angular',
      des: 'Angular (also referred to as "Angular 2+") is a TypeScript-based, free and open-source single-page web application framework led by the Angular',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_sw18ZEcCRWtfKNjFurvxjhSZigzDI2WST6fK2nIaqU8lmviyPvgG5lbj9sr9tHVI71Y&usqp=CAU'
    },
    {
      title: 'Angular',
      des: 'Angular (also referred to as "Angular 2+") is a TypeScript-based, free and open-source single-page web application framework led by the Angular',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_sw18ZEcCRWtfKNjFurvxjhSZigzDI2WST6fK2nIaqU8lmviyPvgG5lbj9sr9tHVI71Y&usqp=CAU'
    },
    {
      title: 'Angular',
      des: 'Angular (also referred to as "Angular 2+") is a TypeScript-based, free and open-source single-page web application framework led by the Angular',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_sw18ZEcCRWtfKNjFurvxjhSZigzDI2WST6fK2nIaqU8lmviyPvgG5lbj9sr9tHVI71Y&usqp=CAU'
    }
  ]
    constructor(){
  
    }
  
    ngOnInit(): void{
  
    }

}
