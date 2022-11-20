import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Unidade } from '../unidades/unidade';

@Injectable({
  providedIn: 'root'
})
export class UnidadesService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/unidade`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/unidade/${id}`);
  }

  save( objeto: Unidade): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/unidade',objeto);
  }

  update( objeto: Unidade): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/unidade`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/unidade/${id}`);
  }
}
