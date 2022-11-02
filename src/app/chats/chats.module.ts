import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { ChatsRoutingModule } from './chats-routing.module';
import { ChatsFormComponent } from './chats-form/chats-form.component';


@NgModule({
  declarations: [
    ChatsFormComponent
  ],
  imports: [
    CommonModule,
    ChatsRoutingModule,
    FormsModule
  ],
  exports: [
    ChatsFormComponent
  ]
})
export class ChatsModule { }
