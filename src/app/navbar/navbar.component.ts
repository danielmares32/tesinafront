import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userName:string|null='';
  constructor() { }

  ngOnInit(): void {
    this.userName=sessionStorage.getItem('nombre');
  }

}
