import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogsFormComponent } from './logs-form/logs-form.component';

const routes: Routes = [
  {path: 'logs-form', component: LogsFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogsRoutingModule { }
