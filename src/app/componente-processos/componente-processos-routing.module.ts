import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteProcessosFormComponent } from './componente-processos-form/componente-processos-form.component';

const routes: Routes = [
  {path: 'componente-processos-form', component:  ComponenteProcessosFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponenteProcessosRoutingModule { }
