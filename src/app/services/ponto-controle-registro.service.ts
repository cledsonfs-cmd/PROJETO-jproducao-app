import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PontoControleRegistros } from '../ponto-controle-registros/ponto-controle-registros';


@Injectable({
  providedIn: 'root'
})
export class PontoControleRegistroService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/ponto-controle-registro`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/ponto-controle-registro/${id}`);
  }

  save( objeto: PontoControleRegistros): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/ponto-controle-registro',objeto);
  }

  update( objeto: PontoControleRegistros): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/ponto-controle-registro`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/ponto-controle-registro/${id}`);
  }
}
