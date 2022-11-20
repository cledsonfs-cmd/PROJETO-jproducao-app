import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LinhaProducao } from '../linha-producoes/linha-producao';

@Injectable({
  providedIn: 'root'
})
export class LinhaProducoesService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/linha-producao`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/linha-producao/${id}`);
  }

  save( objeto: LinhaProducao): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/linha-producao',objeto);
  }

  update( objeto: LinhaProducao): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/linha-producao`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/linha-producao/${id}`);
  }
}
