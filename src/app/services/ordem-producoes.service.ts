import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdemProducao } from '../ordem-producoes/ordem-producao';

@Injectable({
  providedIn: 'root'
})
export class OrdemProducoesService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/ordem-producao`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/ordem-producao/${id}`);
  }

  save( objeto: OrdemProducao): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/ordem-producao',objeto);
  }

  update( objeto: OrdemProducao): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/ordem-producao`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/ordem-producao/${id}`);
  }
}
