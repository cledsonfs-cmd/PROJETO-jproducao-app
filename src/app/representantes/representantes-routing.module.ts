import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepresentantesFormComponent } from './representantes-form/representantes-form.component';

const routes: Routes = [
  {path: 'representantes-form', component: RepresentantesFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepresentantesRoutingModule { }
