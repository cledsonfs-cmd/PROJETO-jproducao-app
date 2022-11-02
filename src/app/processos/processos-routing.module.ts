import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessosFormComponent } from './processos-form/processos-form.component';

const routes: Routes = [
  {path: 'processos-form', component: ProcessosFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessosRoutingModule { }
