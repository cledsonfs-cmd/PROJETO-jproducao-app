import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefasFormComponent } from './tarefas-form/tarefas-form.component';

const routes: Routes = [
  {path: 'tarefas-form', component: TarefasFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarefasRoutingModule { }
