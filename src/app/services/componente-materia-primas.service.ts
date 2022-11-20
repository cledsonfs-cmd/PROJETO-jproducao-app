import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponenteMateriaPrima } from '../componente-materia-primas/componente-materia-prima';

@Injectable({
  providedIn: 'root'
})
export class ComponenteMateriaPrimasService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/componente-materia-prima`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/componente-materia-prima/${id}`);
  }

  save( objeto: ComponenteMateriaPrima): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/componente-materia-prima',objeto);
  }

  update( objeto: ComponenteMateriaPrima): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/componente-materia-prima`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/componente-materia-prima/${id}`);
  }
}
