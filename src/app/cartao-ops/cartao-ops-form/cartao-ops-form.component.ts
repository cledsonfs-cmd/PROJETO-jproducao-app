import { Component, OnInit } from '@angular/core';

import { CartaoOp } from '../cartao-op';
import { CartaoOpsService } from '../../services/cartao-ops.service';

@Component({
  selector: 'app-cartao-ops-form',
  templateUrl: './cartao-ops-form.component.html',
  styleUrls: ['./cartao-ops-form.component.css']
})
export class CartaoOpsFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto: CartaoOp = new CartaoOp();

  constructor(
    private service: CartaoOpsService
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
