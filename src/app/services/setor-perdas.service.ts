import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SetorPerda } from '../setor-perdas/setor-perda';

@Injectable({
  providedIn: 'root'
})
export class SetorPerdasService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/setor-perda`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/setor-perda/${id}`);
  }

  save( objeto: SetorPerda): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/setor-perda',objeto);
  }

  update( objeto: SetorPerda): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/setor-perda`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/setor-perda/${id}`);
  }
}
