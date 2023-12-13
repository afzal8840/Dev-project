import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Input('hideBtn') hidebtn: boolean = false;
  @Input('login') Login: boolean = false;
  @Input('logout') Logout: boolean = false;
  @Input('cart') Cart: boolean = false;




  constructor(private router: Router) { }
  
  ngOnInit(): void{}

  // login(){
  //   this.router.navigate(['/login'])
  // }
  logout(){
    this.router.navigate(['/login'])

  }

  cart(){
    this.router.navigate(['/cart'])

  }
}
