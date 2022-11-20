import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lote } from '../lotes/lote';

@Injectable({
  providedIn: 'root'
})
export class LotesService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/lote`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/lote/${id}`);
  }

  save( objeto: Lote): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/lote',objeto);
  }

  update( objeto: Lote): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/lote`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/lote/${id}`);
  }
}
