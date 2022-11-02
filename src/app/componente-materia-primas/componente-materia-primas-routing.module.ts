import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteMateriaPrimasFormComponent } from './componente-materia-primas-form/componente-materia-primas-form.component';

const routes: Routes = [
  {path: 'componente-materia-primas-form', component: ComponenteMateriaPrimasFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponenteMateriaPrimasRoutingModule { }
