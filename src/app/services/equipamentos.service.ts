import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipamento } from '../equipamentos/equipamento';

@Injectable({
  providedIn: 'root'
})
export class EquipamentosService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/equipamento`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/equipamento/${id}`);
  }

  save( objeto: Equipamento): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/equipamento',objeto);
  }

  update( objeto: Equipamento): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/equipamento`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/equipamento/${id}`);
  }
}
