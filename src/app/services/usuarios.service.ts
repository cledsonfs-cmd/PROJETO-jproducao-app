import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../usuarios/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/usuario`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/usuario/${id}`);
  }

  save( objeto: Usuario): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/usuario',objeto);
  }

  update( objeto: Usuario): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/usuario`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/usuario/${id}`);
  }
}
