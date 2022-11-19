import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from '../pedidos/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(
    private http : HttpClient
  ) { }
}
