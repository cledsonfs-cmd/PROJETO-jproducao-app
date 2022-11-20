import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estoque } from '../estoques/estoque';

@Injectable({
  providedIn: 'root'
})
export class EstoquesService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/estoque`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/estoque/${id}`);
  }

  save( objeto: Estoque): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/estoque',objeto);
  }

  update( objeto: Estoque): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/estoque`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/estoque/${id}`);
  }
}
