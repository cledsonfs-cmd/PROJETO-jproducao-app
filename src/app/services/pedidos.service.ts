import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../pedidos/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/pedido`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/pedido/${id}`);
  }

  save( objeto: Pedido): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/pedido',objeto);
  }

  update( objeto: Pedido): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/pedido`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/pedido/${id}`);
  }
}
