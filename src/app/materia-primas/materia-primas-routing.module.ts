import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MateriaPrimasFormComponent } from './materia-primas-form/materia-primas-form.component';

const routes: Routes = [
  {path: 'materia-primas-form', component: MateriaPrimasFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MateriaPrimasRoutingModule { }
