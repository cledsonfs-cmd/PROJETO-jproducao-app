import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubProcesso } from '../sub-processos/sub-processo';

@Injectable({
  providedIn: 'root'
})
export class SubProcessosService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/sub-processo`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/sub-processo/${id}`);
  }

  save( objeto: SubProcesso): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/sub-processo',objeto);
  }

  update( objeto: SubProcesso): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/sub-processo`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/sub-processo/${id}`);
  }
}
