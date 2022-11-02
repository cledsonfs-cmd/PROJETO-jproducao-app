import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipamentosFormComponent } from './equipamentos-form/equipamentos-form.component';

const routes: Routes = [
  {path: 'equipamentos-form', component: EquipamentosFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipamentosRoutingModule { }
