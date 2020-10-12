import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS_ASSISTANT } from './pages-menu';
import { MENU_ITEMS_ADMIN } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit {

  menu = MENU_ITEMS_ASSISTANT;

  ngOnInit(): void {
    //throw new Error("Method not implemented.");
  }

  /*getMenu(){
    let user = localStorage.getItem('connect')
    if(user == 'assistant'){
      this.menu = MENU_ITEMS_ASSISTANT;
    } else if (user == 'admin') {
      this.menu = MENU_ITEMS_ADMIN;
    }
  }*/

  
  
}
