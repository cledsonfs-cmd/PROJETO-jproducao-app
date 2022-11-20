import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../funcionarios/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/funcionario`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/funcionario/${id}`);
  }

  save( objeto: Funcionario): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/funcionario',objeto);
  }

  update( objeto: Funcionario): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/funcionario`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/funcionario/${id}`);
  }
}
