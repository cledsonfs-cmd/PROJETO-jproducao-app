import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnidadesFormComponent } from './unidades-form/unidades-form.component';

const routes: Routes = [
  {path: 'unidades-form', component: UnidadesFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnidadesRoutingModule { }
