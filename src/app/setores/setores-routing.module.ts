import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetoresFormComponent } from './setores-form/setores-form.component';

const routes: Routes = [
  {path: 'setores-form', component: SetoresFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetoresRoutingModule { }
