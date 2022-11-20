import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MateriaPrima } from '../materia-primas/materia-prima';

@Injectable({
  providedIn: 'root'
})
export class MateriaPrimasService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/materia-prima`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/materia-prima/${id}`);
  }

  save( objeto: MateriaPrima): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/materia-prima',objeto);
  }

  update( objeto: MateriaPrima): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/materia-prima`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/materia-prima/${id}`);
  }
}
