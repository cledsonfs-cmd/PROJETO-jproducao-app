import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producao } from '../producoes/producao';

@Injectable({
  providedIn: 'root'
})
export class ProducoesService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/producao`);
  }

  get(id: number): Observable<Producao>{
    return this.http.get<any>(`http://localhost:8080/api/producao/${id}`);
  }

  save( objeto: Producao): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/producao',objeto);
  }

  update( objeto: Producao): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/producao`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/producao/${id}`);
  }
}
