import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Maquina } from '../maquinas/maquina';

@Injectable({
  providedIn: 'root'
})
export class MaquinasService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/maquina`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/maquina/${id}`);
  }

  save( objeto: Maquina): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/maquina',objeto);
  }

  update( objeto: Maquina): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/maquina`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/maquina/${id}`);
  }
}
