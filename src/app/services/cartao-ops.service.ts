import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartaoOp } from '../cartao-ops/cartao-op';

@Injectable({
  providedIn: 'root'
})
export class CartaoOpsService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/cartao-op`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/cartao-op/${id}`);
  }

  save( objeto: CartaoOp): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/cartao-op',objeto);
  }

  update( objeto: CartaoOp): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/cartao-op`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/cartao-op/${id}`);
  }
}
