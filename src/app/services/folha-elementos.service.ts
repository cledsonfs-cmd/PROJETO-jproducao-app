import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FolhaElemento } from '../folha-elementos/folha-elemento';

@Injectable({
  providedIn: 'root'
})
export class FolhaElementosService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/folha-elemento`);
  }

  get(id: number): Observable<FolhaElemento>{
    return this.http.get<any>(`http://localhost:8080/api/folha-elemento/${id}`);
  }

  save( objeto: FolhaElemento): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/folha-elemento',objeto);
  }

  update( objeto: FolhaElemento): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/folha-elemento`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/folha-elemento/${id}`);
  }
}
