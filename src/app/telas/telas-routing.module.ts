import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelasFormComponent } from './telas-form/telas-form.component';

const routes: Routes = [
  {path: 'telas-form', component: TelasFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelasRoutingModule { }
