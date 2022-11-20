import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PrazoEntrega } from '../prazo-entregas/prazo-entrega';

@Injectable({
  providedIn: 'root'
})
export class PrazoEntregasService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/prazo-entrega`);
  }

  get(id: number): Observable<PrazoEntrega>{
    return this.http.get<any>(`http://localhost:8080/api/prazo-entrega/${id}`);
  }

  save( objeto: PrazoEntrega): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/prazo-entrega',objeto);
  }

  update( objeto: PrazoEntrega): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/prazo-entrega`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/prazo-entrega/${id}`);
  }
}
