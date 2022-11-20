import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Almoxarifado } from '../almoxarifados/almoxarifado';

@Injectable({
  providedIn: 'root'
})
export class AlmoxarifadosService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/almoxarifado`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/almoxarifado/${id}`);
  }

  save( objeto: Almoxarifado): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/almoxarifado',objeto);
  }

  update( objeto: Almoxarifado): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/almoxarifado`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/almoxarifado/${id}`);
  }
}
