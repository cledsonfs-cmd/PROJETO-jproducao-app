import { Component, OnInit } from '@angular/core';

import { ItemPedido } from '../item-pedido';
import { ItemPedidosService } from '../../services/item-pedidos.service';

@Component({
  selector: 'app-item-pedidos-form',
  templateUrl: './item-pedidos-form.component.html',
  styleUrls: ['./item-pedidos-form.component.css']
})
export class ItemPedidosFormComponent implements OnInit {

  itemPedido: ItemPedido;

  constructor(
    private itemPedidosService: ItemPedidosService
  ) { 
    this.itemPedido = new ItemPedido();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
