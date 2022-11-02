import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { LogsRoutingModule } from './logs-routing.module';
import { LogsFormComponent } from './logs-form/logs-form.component';


@NgModule({
  declarations: [
    LogsFormComponent
  ],
  imports: [
    CommonModule,
    LogsRoutingModule,
    FormsModule
  ],
  exports: [
    LogsFormComponent
  ]
})
export class LogsModule { }
