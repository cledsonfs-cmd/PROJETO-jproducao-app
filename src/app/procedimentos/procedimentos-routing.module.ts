import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcedimentosFormComponent } from './procedimentos-form/procedimentos-form.component';

const routes: Routes = [
  {path: 'procedimentos-form', component: ProcedimentosFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcedimentosRoutingModule { }
