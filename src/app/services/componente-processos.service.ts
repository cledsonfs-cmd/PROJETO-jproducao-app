import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponenteProcesso } from '../componente-processos/componente-processo';

@Injectable({
  providedIn: 'root'
})
export class ComponenteProcessosService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/componente-processo`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/componente-processo/${id}`);
  }

  save( objeto: ComponenteProcesso): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/componente-processo',objeto);
  }

  update( objeto: ComponenteProcesso): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/componente-processo`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/componente-processo/${id}`);
  }
}
