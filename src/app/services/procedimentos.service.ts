import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Procedimento } from '../procedimentos/procedimento';

@Injectable({
  providedIn: 'root'
})
export class ProcedimentosService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/procedimento`);
  }

  get(id: number): Observable<Procedimento>{
    return this.http.get<any>(`http://localhost:8080/api/procedimento/${id}`);
  }

  save( objeto: Procedimento): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/procedimento',objeto);
  }

  update( objeto: Procedimento): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/procedimento`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/procedimento/${id}`);
  }
}
