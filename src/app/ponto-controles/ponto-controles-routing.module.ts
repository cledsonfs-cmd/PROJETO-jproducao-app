import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PontoControlesFormComponent } from './ponto-controles-form/ponto-controles-form.component';

const routes: Routes = [
  {path: 'ponto-controles-form', component: PontoControlesFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PontoControlesRoutingModule { }
