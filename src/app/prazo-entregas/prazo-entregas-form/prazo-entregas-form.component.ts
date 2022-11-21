import { Component, OnInit } from '@angular/core';

import { PrazoEntrega } from '../prazo-entrega';
import { PrazoEntregasService } from '../../services/prazo-entregas.service';

@Component({
  selector: 'app-prazo-entregas-form',
  templateUrl: './prazo-entregas-form.component.html',
  styleUrls: ['./prazo-entregas-form.component.css']
})
export class PrazoEntregasFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto: PrazoEntrega = new PrazoEntrega();

  constructor(
    private service: PrazoEntregasService
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
