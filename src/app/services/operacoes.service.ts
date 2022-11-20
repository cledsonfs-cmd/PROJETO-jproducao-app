import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Operacao } from '../operacoes/operacao';

@Injectable({
  providedIn: 'root'
})
export class OperacoesService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/operacao`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/operacao/${id}`);
  }

  save( objeto: Operacao): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/operacao',objeto);
  }

  update( objeto: Operacao): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/operacao`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/operacao/${id}`);
  }
}
