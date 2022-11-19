import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chat } from '../chats/chat';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  constructor(
    private http : HttpClient
  ) { }
}
