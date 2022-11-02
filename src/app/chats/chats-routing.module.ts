import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatsFormComponent } from './chats-form/chats-form.component';

const routes: Routes = [
  {path: 'chats-form', component: ChatsFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatsRoutingModule { }
