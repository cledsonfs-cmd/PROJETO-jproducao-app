import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from '../componentes/componente';

@Injectable({
  providedIn: 'root'
})
export class ComponentesService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/componente`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/componente/${id}`);
  }

  save( objeto: Componente): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/componente',objeto);
  }

  update( objeto: Componente): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/componente`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/componente/${id}`);
  }
}
