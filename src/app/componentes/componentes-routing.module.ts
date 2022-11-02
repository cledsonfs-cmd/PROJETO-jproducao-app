import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentesFormComponent } from './componentes-form/componentes-form.component';

const routes: Routes = [
  {path: 'componentes-form', component:  ComponentesFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentesRoutingModule { }
