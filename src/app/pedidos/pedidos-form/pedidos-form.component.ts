import { Component, OnInit } from '@angular/core';

import { Pedido } from '../pedido'

@Component({
  selector: 'app-pedidos-form',
  templateUrl: './pedidos-form.component.html',
  styleUrls: ['./pedidos-form.component.css']
})
export class PedidosFormComponent implements OnInit {

  pedido: Pedido;

  constructor() { 
    this.pedido = new Pedido();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
