import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  isCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

}
