import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/cliente`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/cliente/${id}`);
  }

  save( objeto: Cliente): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/cliente',objeto);
  }

  update( objeto: Cliente): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/cliente`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/cliente/${id}`);
  }
}
