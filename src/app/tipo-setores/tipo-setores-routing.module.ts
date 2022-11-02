import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoSetoresFormComponent } from './tipo-setores-form/tipo-setores-form.component';

const routes: Routes = [
  {path: 'tipo-setores-form', component: TipoSetoresFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoSetoresRoutingModule { }
