import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosFormComponent } from './eventos-form/eventos-form.component';

const routes: Routes = [
  {path: 'eventos-form', component: EventosFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }
