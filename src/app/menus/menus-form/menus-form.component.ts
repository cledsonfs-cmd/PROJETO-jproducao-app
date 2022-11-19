import { Component, OnInit } from '@angular/core';

import { Menu } from '../menu';
import { MenusService } from '../../services/menus.service';

@Component({
  selector: 'app-menus-form',
  templateUrl: './menus-form.component.html',
  styleUrls: ['./menus-form.component.css']
})
export class MenusFormComponent implements OnInit {

  objeto: Menu = new Menu();

  constructor(
    private menusService: MenusService
  ) {
    
   }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
