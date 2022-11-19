import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemPedido } from '../item-pedidos/item-pedido';

@Injectable({
  providedIn: 'root'
})
export class ItemPedidosService {

  constructor(
    private http : HttpClient
  ) { }
}
