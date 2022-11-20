import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../tarefas/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/tarefa`);
  }

  get(id: number): Observable<Tarefa>{
    return this.http.get<any>(`http://localhost:8080/api/tarefa/${id}`);
  }

  save( objeto: Tarefa): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/tarefa',objeto);
  }

  update( objeto: Tarefa): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/tarefa`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/tarefa/${id}`);
  }
}
