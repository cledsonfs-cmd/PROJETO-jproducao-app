import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenusRoutingModule } from './menus-routing.module';
import { MenusFormComponent } from './menus-form/menus-form.component';


@NgModule({
  declarations: [
    MenusFormComponent
  ],
  imports: [
    CommonModule,
    MenusRoutingModule
  ],
  exports: [
    MenusFormComponent
  ]
})
export class MenusModule { }
