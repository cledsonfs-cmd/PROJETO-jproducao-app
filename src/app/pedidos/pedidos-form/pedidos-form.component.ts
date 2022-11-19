import { Component, OnInit } from '@angular/core';

import { Pedido } from '../pedido';
import { PedidosService } from '../../services/pedidos.service';

@Component({
  selector: 'app-pedidos-form',
  templateUrl: './pedidos-form.component.html',
  styleUrls: ['./pedidos-form.component.css']
})
export class PedidosFormComponent implements OnInit {

  objeto: Pedido = new Pedido();

  constructor(
    private pedidosService: PedidosService
  ) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
