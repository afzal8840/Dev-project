import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() hideBtn: boolean  ;
  @Input() loginBtn: boolean  ;
  @Input() logoutBtn: boolean  ;
  @Input() cartBtn: boolean  ;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // console.log(this.hideBtn);
    // console.log(this.loginBtn);
    // console.log(this.logoutbtn);
    // console.log(this.cartbtn);
    
  }
  logout() {
    this.router.navigate(['/login']);
  }

  // login(){
  //   this.router.navigate(['/login']);
  // }

  cart() {
    this.router.navigate(['/cart']);
  }
}
