import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Faturamento } from '../faturamentos/faturamento';

@Injectable({
  providedIn: 'root'
})
export class FaturamentosService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/faturamento`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/faturamento/${id}`);
  }

  save( objeto: Faturamento): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/faturamento',objeto);
  }

  update( objeto: Faturamento): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/faturamento`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/faturamento/${id}`);
  }
}
