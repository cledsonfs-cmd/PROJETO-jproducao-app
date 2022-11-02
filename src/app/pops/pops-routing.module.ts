import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopsFormComponent } from './pops-form/pops-form.component';

const routes: Routes = [
  {path: 'pops-form', component: PopsFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PopsRoutingModule { }
