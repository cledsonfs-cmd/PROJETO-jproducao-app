import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carteira } from '../carteiras/carteira';

@Injectable({
  providedIn: 'root'
})
export class CarteirasService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/carteira`);
  }

  get(id: number): Observable<Carteira>{
    return this.http.get<any>(`http://localhost:8080/api/carteira/${id}`);
  }

  save( objeto: Carteira): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/carteira',objeto);
  }

  update( objeto: Carteira): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/carteira`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/carteira/${id}`);
  }
}
