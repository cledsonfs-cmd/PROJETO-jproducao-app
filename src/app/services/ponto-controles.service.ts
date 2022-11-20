import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PontoControle } from '../ponto-controles/ponto-controle';

@Injectable({
  providedIn: 'root'
})
export class PontoControlesService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/ponto-controle`);
  }

  get(id: number): Observable<PontoControle>{
    return this.http.get<any>(`http://localhost:8080/api/ponto-controle/${id}`);
  }

  save( objeto: PontoControle): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/ponto-controle',objeto);
  }

  update( objeto: PontoControle): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/ponto-controle`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/ponto-controle/${id}`);
  }
}
