import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tela } from '../telas/tela';

@Injectable({
  providedIn: 'root'
})
export class TelasService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/tela`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/tela/${id}`);
  }

  save( objeto: Tela): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/tela',objeto);
  }

  update( objeto: Tela): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/tela`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/tela/${id}`);
  }
}
