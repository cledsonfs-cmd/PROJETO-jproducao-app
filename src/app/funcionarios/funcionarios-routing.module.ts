import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionariosFormComponent } from './funcionarios-form/funcionarios-form.component';

const routes: Routes = [
  {path: 'funcionarios-form', component: FuncionariosFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionariosRoutingModule { }
