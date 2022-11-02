import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementosFormComponent } from './elementos-form/elementos-form.component';

const routes: Routes = [
  {path: 'elementos-form', component:  ElementosFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementosRoutingModule { }
