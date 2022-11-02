import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaquinasFormComponent } from './maquinas-form/maquinas-form.component';

const routes: Routes = [
  {path: 'maquinas-form', component: MaquinasFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaquinasRoutingModule { }
