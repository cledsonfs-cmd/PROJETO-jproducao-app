import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Elemento } from '../elementos/elemento';

@Injectable({
  providedIn: 'root'
})
export class ElementosService {

  constructor(
    private http : HttpClient)
    {}

    getAll() : Observable<any>{    
      return this.http.get<any[]>(`http://localhost:8080/api/elemento`);
    }
  
    get(id: number): Observable<any>{
      return this.http.get<any>(`http://localhost:8080/api/elemento/${id}`);
    }
  
    save( objeto: Elemento): Observable<any>{
      return this.http.post<any>('http://localhost:8080/api/elemento',objeto);
    }
  
    update( objeto: Elemento): Observable<any>{
      return this.http.put<any>(`http://localhost:8080/api/elemento`,objeto);
    }
  
    delete( id: number): Observable<any>{
      return this.http.delete<any>(`http://localhost:8080/api/elemento/${id}`);
    }
    
  }