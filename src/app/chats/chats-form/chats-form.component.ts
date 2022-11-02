import { Component, OnInit } from '@angular/core';

import { Chat } from '../chat'

@Component({
  selector: 'app-chats-form',
  templateUrl: './chats-form.component.html',
  styleUrls: ['./chats-form.component.css']
})
export class ChatsFormComponent implements OnInit {

  chat: Chat;

  constructor() { 
    this.chat = new Chat();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
