import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatsRoutingModule } from './chats-routing.module';
import { ChatsFormComponent } from './chats-form/chats-form.component';


@NgModule({
  declarations: [
    ChatsFormComponent
  ],
  imports: [
    CommonModule,
    ChatsRoutingModule
  ],
  exports: [
    ChatsFormComponent
  ]
})
export class ChatsModule { }
