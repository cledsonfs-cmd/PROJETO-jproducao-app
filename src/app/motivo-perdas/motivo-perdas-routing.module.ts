import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotivoPerdasFormComponent } from './motivo-perdas-form/motivo-perdas-form.component';

const routes: Routes = [
  {path: 'motivo-perdas-form', component: MotivoPerdasFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotivoPerdasRoutingModule { }
