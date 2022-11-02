import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumoSetoresFormComponent } from './consumo-setores-form/consumo-setores-form.component';

const routes: Routes = [
  {path: 'consumo-setores-form', component:  ConsumoSetoresFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumoSetoresRoutingModule { }
