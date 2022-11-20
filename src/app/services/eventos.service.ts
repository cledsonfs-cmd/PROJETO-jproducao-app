import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../eventos/evento';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/evento`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/evento/${id}`);
  }

  save( objeto: Evento): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/evento',objeto);
  }

  update( objeto: Evento): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/evento`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/evento/${id}`);
  }
}
