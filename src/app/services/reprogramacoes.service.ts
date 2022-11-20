import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reprogramacao } from '../reprogramacoes/reprogramacao';

@Injectable({
  providedIn: 'root'
})
export class ReprogramacoesService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/reprogramacao`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/reprogramacao/${id}`);
  }

  save( objeto: Reprogramacao): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/reprogramacao',objeto);
  }

  update( objeto: Reprogramacao): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/reprogramacao`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/reprogramacao/${id}`);
  }
}
