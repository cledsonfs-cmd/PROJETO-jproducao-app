import { Component, OnInit } from '@angular/core';

import { Menu } from '../menu'

@Component({
  selector: 'app-menus-form',
  templateUrl: './menus-form.component.html',
  styleUrls: ['./menus-form.component.css']
})
export class MenusFormComponent implements OnInit {

  menu: Menu;

  constructor() {
    this.menu = new Menu();
   }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
