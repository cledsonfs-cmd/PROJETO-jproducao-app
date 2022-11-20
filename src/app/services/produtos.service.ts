import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../produtos/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/produto`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/produto/${id}`);
  }

  save( objeto: Produto): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/produto',objeto);
  }

  update( objeto: Produto): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/produto`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/produto/${id}`);
  }
}
