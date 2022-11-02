import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovimentoSetoresFormComponent } from './movimento-setores-form/movimento-setores-form.component';

const routes: Routes = [
  {path: 'movimento-setores-form', component: MovimentoSetoresFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovimentoSetoresRoutingModule { }
