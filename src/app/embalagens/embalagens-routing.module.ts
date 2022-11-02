import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmbalagensFormComponent } from './embalagens-form/embalagens-form.component';

const routes: Routes = [
  {path: 'embalagens-form', component:  EmbalagensFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmbalagensRoutingModule { }
