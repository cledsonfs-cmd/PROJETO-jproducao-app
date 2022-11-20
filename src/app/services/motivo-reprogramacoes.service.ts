import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MotivoReprogramacao } from '../motivo-reprogramacoes/motivo-reprogramacao';

@Injectable({
  providedIn: 'root'
})
export class MotivoReprogramacoesService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/motivo-reprogramacao`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/motivo-reprogramacao/${id}`);
  }

  save( objeto: MotivoReprogramacao): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/motivo-reprogramacao',objeto);
  }

  update( objeto: MotivoReprogramacao): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/motivo-reprogramacao`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/motivo-reprogramacao/${id}`);
  }
}
