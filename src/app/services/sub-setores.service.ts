import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubSetor } from '../sub-setores/sub-setor';

@Injectable({
  providedIn: 'root'
})
export class SubSetoresService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/sub-setor`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/sub-setor/${id}`);
  }

  save( objeto: SubSetor): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/sub-setor',objeto);
  }

  update( objeto: SubSetor): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/sub-setor`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/sub-setor/${id}`);
  }
}
