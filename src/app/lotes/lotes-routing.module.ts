import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LotesFormComponent } from './lotes-form/lotes-form.component';

const routes: Routes = [
  {path: 'lotes-form', component: LotesFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LotesRoutingModule { }
