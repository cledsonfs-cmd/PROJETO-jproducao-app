import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovimentoSetor } from '../movimento-setores/movimento-setor';

@Injectable({
  providedIn: 'root'
})
export class MovimentoSetoresService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/movimento-setor`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/movimento-setor/${id}`);
  }

  save( objeto: MovimentoSetor): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/movimento-setor',objeto);
  }

  update( objeto: MovimentoSetor): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/movimento-setor`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/movimento-setor/${id}`);
  }
}
