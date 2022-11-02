import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FolhaElementosFormComponent } from './folha-elementos-form/folha-elementos-form.component';

const routes: Routes = [
  {path: 'folha-elementos-form', component: FolhaElementosFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FolhaElementosRoutingModule { }
