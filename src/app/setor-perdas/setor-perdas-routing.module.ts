import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetorPerdasFormComponent } from './setor-perdas-form/setor-perdas-form.component';

const routes: Routes = [
  {path: 'setor-perdas-form', component: SetorPerdasFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetorPerdasRoutingModule { }
