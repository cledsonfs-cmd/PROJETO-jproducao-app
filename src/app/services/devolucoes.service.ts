import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Devolucao } from '../devolucoes/devolucao';

@Injectable({
  providedIn: 'root'
})
export class DevolucoesService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/devolucao`);
  }

  get(id: number): Observable<Devolucao>{
    return this.http.get<any>(`http://localhost:8080/api/devolucao/${id}`);
  }

  save( objeto: Devolucao): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/devolucao',objeto);
  }

  update( objeto: Devolucao): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/devolucao`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/devolucao/${id}`);
  }
}
