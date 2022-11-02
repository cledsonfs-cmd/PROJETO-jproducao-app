import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfisFormComponent } from './perfis-form/perfis-form.component';

const routes: Routes = [
  {path: 'perfis-form', component: PerfisFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfisRoutingModule { }
