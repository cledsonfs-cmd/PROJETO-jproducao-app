import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MotivoPerda } from '../motivo-perdas/motivo-perda';

@Injectable({
  providedIn: 'root'
})
export class MotivoPerdasService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/motivo-perda`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/motivo-perda/${id}`);
  }

  save( objeto: MotivoPerda): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/lmotivo-motivo-perda',objeto);
  }

  update( objeto: MotivoPerda): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/motivo-perda`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/motivo-perda/${id}`);
  }
}
