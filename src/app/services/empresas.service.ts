import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../empresas/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/empresa`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/empresa/${id}`);
  }

  save( objeto: Empresa): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/empresa',objeto);
  }

  update( objeto: Empresa): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/empresa`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/empresa/${id}`);
  }
}
