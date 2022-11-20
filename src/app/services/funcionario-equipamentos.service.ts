import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FuncionarioEquipamento } from '../funcionario-equipamentos/funcionario-equipamento';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioEquipamentosService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/funcionario-equipamento`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/funcionario-equipamento/${id}`);
  }

  save( objeto: FuncionarioEquipamento): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/funcionario-equipamento',objeto);
  }

  update( objeto: FuncionarioEquipamento): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/funcionario-equipamento`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/funcionario-equipamento/${id}`);
  }
}
