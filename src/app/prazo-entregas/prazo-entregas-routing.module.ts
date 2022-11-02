import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrazoEntregasFormComponent } from './prazo-entregas-form/prazo-entregas-form.component';

const routes: Routes = [
  {path: 'prazo-entregas-form', component: PrazoEntregasFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrazoEntregasRoutingModule { }
