import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubSetoresFormComponent } from './sub-setores-form/sub-setores-form.component';

const routes: Routes = [
  {path: 'sub-setores-form', component: SubSetoresFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubSetoresRoutingModule { }
