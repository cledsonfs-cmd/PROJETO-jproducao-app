import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Embalagem } from '../embalagens/embalagem';

@Injectable({
  providedIn: 'root'
})
export class EmbalagensService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/embalagem`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/embalagem/${id}`);
  }

  save( objeto: Embalagem): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/embalagem',objeto);
  }

  update( objeto: Embalagem): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/embalagem`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/embalagem/${id}`);
  }
}
