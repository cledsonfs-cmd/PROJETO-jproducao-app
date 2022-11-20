import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Representante } from '../representantes/representante';

@Injectable({
  providedIn: 'root'
})
export class RepresentantesService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/representante`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/representante/${id}`);
  }

  save( objeto: Representante): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/representante',objeto);
  }

  update( objeto: Representante): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/representante`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/representante/${id}`);
  }
}
