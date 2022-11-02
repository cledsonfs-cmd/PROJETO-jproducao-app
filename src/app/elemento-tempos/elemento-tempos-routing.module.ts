import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementoTemposFormComponent } from './elemento-tempos-form/elemento-tempos-form.component';

const routes: Routes = [
  {path: 'elemento-tempos-form', component:  ElementoTemposFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementoTemposRoutingModule { }
