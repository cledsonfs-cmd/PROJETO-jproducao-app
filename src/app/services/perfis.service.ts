import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Perfil } from '../perfis/perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfisService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/perfil`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/perfil/${id}`);
  }

  save( objeto: Perfil): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/perfil',objeto);
  }

  update( objeto: Perfil): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/perfil`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/perfil/${id}`);
  }
}
