import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubProcessosFormComponent } from './sub-processos-form/sub-processos-form.component';

const routes: Routes = [
  {path: 'sub-processos-form', component: SubProcessosFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubProcessosRoutingModule { }
