import { Component, OnInit } from '@angular/core';

import { ItemPedido } from '../item-pedido'

@Component({
  selector: 'app-item-pedidos-form',
  templateUrl: './item-pedidos-form.component.html',
  styleUrls: ['./item-pedidos-form.component.css']
})
export class ItemPedidosFormComponent implements OnInit {

  itemPedido: ItemPedido;

  constructor() { 
    this.itemPedido = new ItemPedido();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
