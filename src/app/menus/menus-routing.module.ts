import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenusFormComponent } from './menus-form/menus-form.component';

const routes: Routes = [
  {path: 'menus-form', component: MenusFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenusRoutingModule { }
