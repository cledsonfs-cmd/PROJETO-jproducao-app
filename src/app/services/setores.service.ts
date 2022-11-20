import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Setor } from '../setores/setor';

@Injectable({
  providedIn: 'root'
})
export class SetoresService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/setor`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/setor/${id}`);
  }

  save( objeto: Setor): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/setor',objeto);
  }

  update( objeto: Setor): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/setor`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/setor/${id}`);
  }
}
