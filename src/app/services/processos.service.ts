import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Processo } from '../processos/processo';

@Injectable({
  providedIn: 'root'
})
export class ProcessosService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/processo`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/processo/${id}`);
  }

  save( objeto: Processo): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/processo',objeto);
  }

  update( objeto: Processo): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/processo`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/processo/${id}`);
  }
}
