import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FolhaObservacao } from '../folha-observacoes/folha-observacao';

@Injectable({
  providedIn: 'root'
})
export class FolhaObservacoesService {

  constructor(
    private http : HttpClient
  ) { }
  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/folha-observacao`);
  }

  get(id: number): Observable<FolhaObservacao>{
    return this.http.get<any>(`http://localhost:8080/api/folha-observacao/${id}`);
  }

  save( objeto: FolhaObservacao): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/folha-observacao',objeto);
  }

  update( objeto: FolhaObservacao): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/folha-observacao`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/folha-observacao/${id}`);
  }
}
