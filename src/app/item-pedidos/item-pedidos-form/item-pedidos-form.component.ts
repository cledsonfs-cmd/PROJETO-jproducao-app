import { Component, OnInit } from '@angular/core';

import { ItemPedido } from '../item-pedido';
import { ItemPedidosService } from '../../services/item-pedidos.service';

@Component({
  selector: 'app-item-pedidos-form',
  templateUrl: './item-pedidos-form.component.html',
  styleUrls: ['./item-pedidos-form.component.css']
})
export class ItemPedidosFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto: ItemPedido = new ItemPedido();

  constructor(
    private service: ItemPedidosService
  ) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.id > 0){
      this.service
        .update(this.objeto)
        .subscribe(response => {
          this.success = true;
          this.errros = [];
        }, errorResponse => { this.errros = ['Erro ao atualizar.'];
      });
    }else{      
      this.service.save(this.objeto)
        .subscribe(response => {
          this.success = true;
          this.errros = [];
      this.objeto = response;        
  },
      errorResponse => { this.errros = errorResponse.errros;
      this.success = false;        
    });
    this.success = true;
  }
  }

}
