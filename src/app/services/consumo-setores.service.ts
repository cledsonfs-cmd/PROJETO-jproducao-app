import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsumoSetor } from '../consumo-setores/consumo-setor';

@Injectable({
  providedIn: 'root'
})
export class ConsumoSetoresService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/consumo-setor`);
  }

  get(id: number): Observable<ConsumoSetor>{
    return this.http.get<any>(`http://localhost:8080/api/consumo-setor/${id}`);
  }

  save( objeto: ConsumoSetor): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/consumo-setor',objeto);
  }

  update( objeto: ConsumoSetor): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/consumo-setor`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/consumo-setor/${id}`);
  }
}
