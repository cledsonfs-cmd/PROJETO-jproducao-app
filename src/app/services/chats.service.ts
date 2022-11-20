import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chat } from '../chats/chat';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/chat`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/chat/${id}`);
  }

  save( objeto: Chat): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/chat',objeto);
  }

  update( objeto: Chat): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/chat`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/chat/${id}`);
  }
}
